Fragment Images-alterAddTodoOpen {
    Action: replace
    Priority: high
    FragmentationPoints: addTodoOpen
    PointBracketsLan: html
    Destinations: Frontend-BasicStructure-create-todo-component-html
    SourceCode: [ALTERCODE-FRAG]
        <th scope="col">
            <i class="bi-arrow-up-square-fill" (click)="sort('OPEN', 'asc')"></i> Message 
            <i class="bi-arrow-down-square-fill" (click)="sort('OPEN', 'desc')"></i>
        </th>
    [/ALTERCODE-FRAG]
}


Fragment Images-alterAddTodoClosed {
    Action: replace
    Priority: high
    FragmentationPoints: addTodoClosed
    PointBracketsLan: html
    Destinations: Frontend-BasicStructure-create-todo-component-html
    SourceCode: [ALTERCODE-FRAG]
        <th scope="col">
              <i class="bi-arrow-up-square-fill" (click)="sort('CLOSED', 'asc')"></i> Message 
              <i class="bi-arrow-down-square-fill" (click)="sort('CLOSED', 'desc')"></i>
        </th>
    [/ALTERCODE-FRAG]
}