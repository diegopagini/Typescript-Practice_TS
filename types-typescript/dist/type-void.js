// Void
// Tipo Explicito
function showInfo(user) {
    console.log('User info', user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: "diegopagini", firstName: "Diego" });
// Tipo Inferido
function showFormattedInfo(user) {
    console.log("User info", `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}
showFormattedInfo({ id: 1, username: "diegopagini", firstName: "Diego" });
// tipo void, como tipo de dato en varibale
let unusable;
unusable = null;
unusable = undefined;
// Tipo: Never
function handleError(code, message) {
    // Process your code here
    // Generamos un mensaje
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, "Not Found");
}
catch (error) {
}
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(10);
