"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> // Angle Bracket syntax
var username;
username = "diego";
// tenemos una cadena, TS confia en mi!
var message = username.length > 4 ?
    "Welcome " + username :
    "Username is too short";
console.log(message);
