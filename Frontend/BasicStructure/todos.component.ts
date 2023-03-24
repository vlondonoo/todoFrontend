import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormGroup, FormControl } from '@angular/forms';
/*B-addImports*/

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  providers: [TodoService]
})
export class TodosComponent implements OnInit {
  todosOpen: any = [];
  todosClosed: any = [];
  form = new FormGroup({
    message: new FormControl(''),
    /*B-addImageFormControl*/
  });

/*B-addGlobalVariables*/

  constructor(private todoService: TodoService){}

  ngOnInit() {
    this.getOpen();
    this.getClosed();
  }

  create() {
    const newMessage = this.form.controls['message'].value;
    this.todoService.create(newMessage).subscribe(res => {
      this.getOpen();
      this.form.setValue({message: ''});
    });
  }

  getOpen() {
    this.todoService.getOpen().subscribe(res => {
      this.todosOpen = res.list;
    });
  }

  getClosed() {
    this.todoService.getClosed().subscribe(res => {
      this.todosClosed = res.list;
    });
  }

  updateTodo(id:string, state:string) {
    this.todoService.update(id, state).subscribe(res => {
      this.getOpen();
      this.getClosed();
    });
  }

  deleteTodo(id:string) {
    this.todoService.delete(id).subscribe(res => {
      this.getOpen();
      this.getClosed();
    });
  }

  /*B-addSortFunction*/

  /*B-addFileFunction*/
}