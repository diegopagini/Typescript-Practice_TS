console.log("Hola Mundo! :)");
// Number
// Explicito
let phone;
phone = 1;
phone = 54234567;
// phone = "phone"; //arroja un error porque lo definimos cono numero
// Inferido
let phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; //arroja error porque el tipo de dato no es el definido.
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// Tipo: Boolean
// Tipado Explicito
let isPro;
isPro = true;
// isPro = 1; //error de tipado
// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; //error de tipado
// Strings
let userName = "diego";
userName = "Diego";
// userName = true; //error: tipo string
// Template String
// Uso de `` back-tick
let userInfo;
userInfo = `
    User Info:
    User Name: ${userName}
    firstName: ${userName + " Pagini"}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log("userInfo", userInfo);
