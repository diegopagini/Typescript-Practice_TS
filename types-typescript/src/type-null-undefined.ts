// Explicita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // Error

let otherVariable = null;
otherVariable = "test";

// Undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = "test"; Error

let otherUndefined = undefined; //De esta manera es un Any

// Null y Undefiden: Como subtipos

let albumName: string;
// albumName = null; Error
// albumName = undefined; Error
