console.log("Hola Mundo! :)");
// Number
// Explicito
var phone;
phone = 1;
phone = 54234567;
// phone = "phone"; //arroja un error porque lo definimos cono numero
// Inferido
var phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; //arroja error porque el tipo de dato no es el definido.
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Tipo: Boolean
// Tipado Explicito
var isPro;
isPro = true;
// isPro = 1; //error de tipado
// Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 10; //error de tipado
// Strings
var userName = "diego";
userName = "Diego";
// userName = true; //error: tipo string
// Template String
// Uso de `` back-tick
var userInfo;
userInfo = "\n    User Info:\n    User Name: " + userName + "\n    firstName: " + (userName + " Pagini") + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log("userInfo", userInfo);
