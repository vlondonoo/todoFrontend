Fragment Images-alterAddImage {
    Action: replace
    Priority: high
    FragmentationPoints: addImage
    PointBracketsLan: html
    Destinations: Frontend-BasicStructure-create-todo-component-html
    SourceCode: [ALTERCODE-FRAG]
        <div class="row pb-2 pt-2">
            <label for="email" class="col-md-4 col-form-label text-md-end">Image:</label>
            <div class="col-md-6">
                <input type="file" formControlName="image" (change)="onFileChange($event)" class="form-control" />
            </div>
        </div>
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddImageTable {
    Action: replace
    Priority: high
    FragmentationPoints: addImageTable
    PointBracketsLan: html
    Destinations: Frontend-BasicStructure-create-todo-component-html
    SourceCode: [ALTERCODE-FRAG]
        <th scope="col">Image</th>
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddImagePath {
    Action: replace
    Priority: high
    FragmentationPoints: addImagePath
    PointBracketsLan: html
    Destinations: Frontend-BasicStructure-create-todo-component-html
    SourceCode: [ALTERCODE-FRAG]
      <td><img *ngIf="todo.image != ''" height="50px" 
        src="{{BACKEND_URI + 'images/' + todo.image}}"/>
      </td>
    [/ALTERCODE-FRAG]
}