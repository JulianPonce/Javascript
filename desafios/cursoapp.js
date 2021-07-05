let n1 = Number(prompt("ingrese un numero:"))
let n2 = Number(prompt("ingrese otro numero: "))
let total = n1 * n2;

if (total > 100) {
    alert("su numero es mayor a 100 el resultado es" + total)
} else {
    alert("su numero es menor a 100 el resultado es" + total)
}

alert("ingrese sus datos ");

let Nombre = prompt("ingrese su nombre: ");
let Apellido = prompt("imgrese su apellido: ");
let Dni = prompt("imgrese su dni: ");
let Nacimiento = prompt("imgrese su año de nacimiento: ");
let Añoactual = prompt("ingrese el año actual: ");
let Persona = Nombre + " " + Apellido + " " + "Dni numero" + " " + Dni;
let Edad = Añoactual - Nacimiento;
let pais = prompt("ingrese su pais de origen: ")

alert("Hola" + " " + Persona + " " + "edad" + " " + Edad + " " + "de" + " " + pais);

console.log("Hola" + " " + Persona + " " + "edad" + " " + Edad + " " + "de" + " " + pais);



let variable = prompt("ingrese su nacionalidad: ");

if (variable == Argentino) {
    prompt("sos argento papa");
}