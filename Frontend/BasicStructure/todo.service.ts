import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URI } from '../constants';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  /*B-modifyCreateFunction*/
  create(message: string)
  /*E-modifyCreateFunction*/
   {  
    const formData = new FormData();
    formData.append('message', message);
    /*B-addImageFile*/
    return this.http.post(`${BACKEND_URI}todos`, formData);
  }

  getOpen():Observable<any> {
    return this.http.get(`${BACKEND_URI}todos/open`);
  }

  getClosed():Observable<any> {
    return this.http.get(`${BACKEND_URI}todos/closed`);
  }

  update(id: string, state: string) {
    if (state == "OPEN") {
      state = "CLOSED";
    } else {
      state = "OPEN";
    }
    return this.http.get(`${BACKEND_URI}todos/update/${id}/${state}`);
  }

  delete(id: string) {
    return this.http.get(`${BACKEND_URI}todos/delete/${id}`);
  }

  /*B-addSortFunctions*/
}