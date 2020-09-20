export {};
// 10, "10"

// let idUser: number | string;
// idUser = 10;
// idUser = "10";

// // Buscar username dado un ID
// function getUserNameById(id: number | string) {
//     //logica de negocio, find the user
//     return "diego"
// }
// getUserNameById(20);
// getUserNameById("20");

// Alias de tipos: TS

type IdUser = number | string;
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = "10";

// Buscar username dado un ID
function getUserNameById(id: IdUser): Username {
    //logica de negocio, find the user
    return "diego"
}
getUserNameById(20);
getUserNameById("20");

// Tipos Literales
// 100x100, 500x500, 1000x1000
type SquareSize = "100x100" | "500x500" | "1000x1000";
// let smallPicture: SquareSize = "200x200"; //Error

let smallPicture: SquareSize = "100x100";

