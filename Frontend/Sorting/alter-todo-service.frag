Fragment Images-alterAddSortFunctions {
    Action: add
    Priority: high
    FragmentationPoints: addSortFunctions
    PointBracketsLan: java
    Destinations: Frontend-BasicStructure-create-todo-service
    SourceCode: [ALTERCODE-FRAG]    
      getSortedOpen(order: string):Observable<any> {
        return this.http.get(`${BACKEND_URI}todos/open/${order}`);
      }

      getSortedClosed(order: string):Observable<any> {
        return this.http.get(`${BACKEND_URI}todos/closed/${order}`);
      }
    [/ALTERCODE-FRAG]
}