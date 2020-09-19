// Void
// Tipo Explicito
function showInfo(user) {
    console.log('User info', user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: "diegopagini", firstName: "Diego" });
// Tipo Inferido
function showFormattedInfo(user) {
    console.log("User info", "\n        id: " + user.id + "\n        username: " + user.username + "\n        firstName: " + user.firstName + "\n    ");
}
showFormattedInfo({ id: 1, username: "diegopagini", firstName: "Diego" });
// tipo void, como tipo de dato en varibale
var unusable;
unusable = null;
unusable = undefined;
// Tipo: Never
function handleError(code, message) {
    // Process your code here
    // Generamos un mensaje
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, "Not Found");
}
catch (error) {
}
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(10);
