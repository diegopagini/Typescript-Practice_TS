console.log("Hola Mundo! :)")

// Number
// Explicito
let phone: number;
phone = 1;
phone = 54234567;
// phone = "phone"; //arroja un error porque lo definimos cono numero

// Inferido
let phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; //arroja error porque el tipo de dato no es el definido.

let hex: number = 0xf00d;