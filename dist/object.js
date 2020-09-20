// Type: object
var user;
user = {}; //Object
user = {
    id: 123,
    username: "paparazzi",
    firstName: "Pablo",
    isPro: true
};
console.log("user", user);
// Object vs object(Clase JS vs Tipo TS)
var myObj = {
    id: 123,
    username: "paparazzi",
    firstName: "Pablo",
    isPro: true
};
var isInstance = myObj instanceof Object;
console.log(isInstance);
console.log("user.username", myObj.username);
