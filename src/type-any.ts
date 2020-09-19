// Tpo explicito
let idUser: any;
idUser = true;
idUser = 123;
idUser = "SylasRules";

// Tipo inferido
let otherId;
otherId = 1;
otherId = "2";
otherId = false;

console.log(otherId);

let surprise: any = "hello typescript";

const res = surprise.substring(6);
console.log(res);