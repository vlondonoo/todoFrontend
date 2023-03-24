Fragment Images-alterAddSortFunction {
    Action: add
    Priority: high
    FragmentationPoints: addSortFunction
    PointBracketsLan: java
    Destinations: Frontend-BasicStructure-create-todo-componet-ts
    SourceCode: [ALTERCODE-FRAG]    
        sort(status: string, order: string) {
            if (status == "OPEN"){
                this.todoService.getSortedOpen(order).subscribe(res => {
                    this.todosOpen = res.list;
                });
            } else {
                this.todoService.getSortedClosed(order).subscribe(res => {
                    this.todosClosed = res.list;
                });
            }
        }
    [/ALTERCODE-FRAG]
}