"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Ladscape"] = 0] = "Ladscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const album = {
    id: 231,
    title: "Vacations",
    description: "Good times"
};
const picture = {
    id: 1,
    title: "Family",
    orientation: PhotoOrientation.Ladscape
};
let newPicture = {};
newPicture.id = 2;
newPicture.title = "moon";
console.log(newPicture, album);
