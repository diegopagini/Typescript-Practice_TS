// Enum: permiten definir un conjunto de constantes con nombre

// Orientacion para Fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Landscape = 0, // podemos darle valor de manera explicita
    Portrait,   // 1
    Square,     // 2
    Panorama    // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;

console.log('landscape : ', landscape); // -> 0
console.log('Landscape : ', PhotoOrientation[0]); // -> Landscape

enum PictureOrientation {
    Landscape = 10, // 10
    Portrait,   // 11
    Square,     // 12
    Panorama    // 13
}
console.log('porttrait : ', PictureOrientation.Portrait); // -> 11

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    España = 'esp'
}
const country: Country = Country.Colombia;
console.log('country : ', country); // --> col