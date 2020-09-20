"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user; // [1, "user"]
user = [1, "diego"];
console.log("user", user);
console.log("username", user[1]);
// Tuplas con varios valores
// id, username, isPro
let userInfo;
userInfo = [2, "paparazzi", true];
// Arreglo de Tuplas
let array = [];
array.push([1, "diego"]);
array.push([2, "carlos"]);
array.push([3, "pedro"]);
console.log(array);
// Uso de funciones Array
// carlos --> Carlos2.0
array[1][1] = array[1][1].concat("2.0");
