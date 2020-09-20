// Corchetes []
// Tipo Explicito
var users;
users = ["diego", "paparazzi", "platzi"];
// users = [1, true, "test"]; Error
// Tipo Inferido
var otherUsers = ["diego", "paparazzi", "platzi"];
// users = [1, true, "test"]; Error
// Array<TIPO></TIPO>
var pictureTiitles;
pictureTiitles = ["Favorite Sunset", "Vacation Time", "Landscape"];
// Accediendo a los valores en un Array
console.log("fisrt user", users[0]);
// Propiedades en Array
users.length;
// Uso de funciones en Arrays
users.push("aPlatziUser");
users.sort();
console.log("users", users);
