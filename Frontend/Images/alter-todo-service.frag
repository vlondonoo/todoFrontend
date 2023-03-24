Fragment Images-alterModifyCreateFunction {
    Action: add
    Priority: high
    FragmentationPoints: modifyCreateFunction
    PointBracketsLan: java
    Destinations: Frontend-BasicStructure-create-todo-service
    SourceCode: [ALTERCODE-FRAG]    
      create(message: string, imageFile: File | string)
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddImageFile {
    Action: add
    Priority: high
    FragmentationPoints: addImageFile
    PointBracketsLan: java
    Destinations: Frontend-BasicStructure-create-todo-service
    SourceCode: [ALTERCODE-FRAG]    
      formData.append('image', imageFile);
    [/ALTERCODE-FRAG]
}