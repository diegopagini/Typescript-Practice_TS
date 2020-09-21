import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(1, "luxaviles", "luis", true);
const album = new Album(10, "platzi");
const picture = new Picture(1, "typescript", "2020-03", PhotoOrientation.Landscape);
//Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
user.removeAlbum(album);
console.log("user", user);
