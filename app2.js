let usuario = prompt("ingrese su nombre de usuario: ");
let edad = Number(prompt("ingrese su edad: "));
let password = Number(prompt("ingrese clave numerica de usuario: "));
let acceder = confirm("desea ingresar?");


if (acceder = true) {

    if ((usuario == "Kapo123") && (edad === 30) && (password === 12345)) {
        alert("Bienvenido" + " " + usuario + " " + "sus datos han sido correctos");
    } else if ((usuario !== "Kapo123") && (edad !== 30) && (password !== 12345)) {
        alert("Todos los datos son invalidos");
    } else if ((usuario !== "Kapo123") && (edad !== 30)) {
        alert("Usuario y edad invalidos");
    } else if ((usuario !== "Kapo123") && (password !== 12345)) {
        alert("Usuario y password invalidos");
    } else if ((password !== 12345) && (edad !== 30)) {
        alert("Edad y password invalidos");
    } else if (usuario !== "Kapo123") {
        alert("Usuario invalido verifique mayusculas y caracteres");
    } else if (edad !== 30) {
        alert("Edad incorrecta");
    } else if (password !== 12345) {
        alert("Su clave es incorrecta");
    }



}