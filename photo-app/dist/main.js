"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photo_app_1 = require("./photo-app");
var user = new photo_app_1.User(1, "luxaviles", "luis", true);
var album = new photo_app_1.Album(10, "platzi");
var picture = new photo_app_1.Picture(1, "typescript", "2020-03", photo_app_1.PhotoOrientation.Landscape);
//Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log("user", user);
