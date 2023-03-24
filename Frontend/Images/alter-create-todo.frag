Fragment Images-alterAddImports {
    Action: add
    Priority: high
    FragmentationPoints: addImports
    PointBracketsLan: java
    Destinations: Frontend-BasicStructure-create-todo-componet-ts
    SourceCode: [ALTERCODE-FRAG]    
       import { BACKEND_URI } from '../../constants';
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddImageFormControl {
    Action: add
    Priority: high
    FragmentationPoints: addImageFormControl
    PointBracketsLan: java
    Destinations: Frontend-BasicStructure-create-todo-componet-ts
    SourceCode: [ALTERCODE-FRAG]    
      image: new FormControl(''),
      imageFile: new FormControl(''),
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddGlobalVariables {
    Action: add
    Priority: high
    FragmentationPoints: addGlobalVariables
    PointBracketsLan: java
    Destinations: Frontend-BasicStructure-create-todo-componet-ts
    SourceCode: [ALTERCODE-FRAG]    
      BACKEND_URI: string = BACKEND_URI;
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddFileFunction {
    Action: add
    Priority: high
    FragmentationPoints: addFileFunction
    PointBracketsLan: java
    Destinations: Frontend-BasicStructure-create-todo-componet-ts
    SourceCode: [ALTERCODE-FRAG]    
      onFileChange(event:any) {
        if (event.target.files.length > 0) {
          const file = event.target.files[0];
          this.form.patchValue({
            imageFile: file
          });
        }
      }
    [/ALTERCODE-FRAG]
}