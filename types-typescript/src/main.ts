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
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo: Boolean
// Tipado Explicito
let isPro: boolean;
isPro = true;
// isPro = 1; //error de tipado

// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; //error de tipado

// Strings
let userName: string = "diego";
userName = "Diego";
// userName = true; //error: tipo string

// Template String
// Uso de `` back-tick
let userInfo: string;
userInfo = `
    User Info:
    User Name: ${userName}
    firstName: ${userName + " Pagini"}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log("userInfo", userInfo);

