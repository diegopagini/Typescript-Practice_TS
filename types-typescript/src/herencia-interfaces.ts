export {}

enum PhotoOrientation {
    Ladscape,
    Portrait,
    Square,
    Panorama
}

interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity {
    // copia de los atributos de Entity
    description: string;
}

interface Picture extends Entity {
    // copia de los atributos de Entity
    orientation: PhotoOrientation;
}

const album: Album = {
    id: 231,
    title: "Vacations",
    description: "Good times"
};

const picture: Picture = {
    id: 1,
    title: "Family",
    orientation: PhotoOrientation.Ladscape
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = "moon";

console.log(newPicture, album)