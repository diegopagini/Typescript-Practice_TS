export {};
console.clear();

enum PhotoOrientation {
    Landscape = 'Landscape',
    Portrait = 'Portrait',
    Square = 'Square',
    Panorama = 'Panorama',
}

// get y set
class Picture {
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
    }

    get id(): number {
    return this._id;
    }
    set id(id: number) {
    this._id = id;
    }

    get title(): string {
    return this._title;
    }
    set title(title: string) {
    this._title = title;
    }

    get orientation(): PhotoOrientation {
    return this._orientation;
    }
    set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation;
    }

  // Comportamiento
    public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}

class Album {
    #id: number;
    #title: string;
    #pictures: Picture[] = [];

    constructor(id: number, title: string) {
        this.#id = id;
        this.#title = title;
    // this.pictures = [];
    }

    get id(): number {
    return this.#id;
    }
//   set id(id: number) {
//     this.#id = id;
//   }

    get title(): string {
    return this.#title;
    }
    set title(title: string) {
    this.#title = title;
    }

    addPicture(picture: Picture) {
        this.#pictures.push(picture);
    // this.pictures.push({...picture});
    }
}

const picture: Picture = new Picture(100, 'cool', PhotoOrientation.Square);
const picture1 = new Picture(201, 'korn', PhotoOrientation.Square);
const album: Album = new Album(534, 'Family');
console.log(picture);
console.log(picture1);
album.addPicture(picture);
album.addPicture(picture1);

console.log('album', album);

// Accediendo a los miembros publicos
// picture.id = 100;
picture.title = 'Another title';
console.log('album', album);
// console.log(album.id);

picture.title = 'New title';