// Type: object
let user: object;
user = {}; //Object

user = {
    id: 123,
    username: "paparazzi",
    firstName: "Pablo",
    isPro: true
};

console.log("user", user);
// Object vs object(Clase JS vs Tipo TS)
const myObj = {
    id: 123,
    username: "paparazzi",
    firstName: "Pablo",
    isPro: true
};

const isInstance = myObj instanceof Object;
console.log(isInstance);
console.log("user.username",myObj.username)