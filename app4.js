/*  function suma(valor1, valor2) {
let suma = valor1 + valor2
console.log(suma);
}

let numero1 = Number(prompt("ingrese el primer valor"))
let numero2 = Number(prompt("ingrese el segundo valor"))

suma(numero1, numero2)
suma(numero2, 12)
suma(numero1, 30)*/



/*


let mat = Number(prompt("ingrese nota de matematicas"));
let geo = Number(prompt("ingrese nota de geografia"));
let fis = Number(prompt("ingrese nota de fisica"));
let qui = Number(prompt("ingrese nota de quimica"));
let pro = Number(prompt("ingrese cantidad de notas ingresadas"));

if (pro <= 0) {
    alert("datos incorrectos verifique dividendo")
    return Error
} else {

    function promedio(mat, geo, fis, qui, pro) {

        let resultado = (mat + geo + fis + qui) / pro
        return resultado;


    }

}
alert("Su promedio es " + " " + promedio(mat, geo, fis, qui, pro));

console.log("Su promedio es " + " " + promedio(mat, geo, fis, qui, pro));*/



let pr1 = Number(prompt("ingrese valor de producto 1 "))
let pr2 = Number(prompt("ingrese valor de producto 2 "))
let pr3 = Number(prompt("ingrese valor de producto 3 "))
let pr4 = Number(prompt("ingrese valor de producto 4 "))

function iva(pr1, pr2, pr3, pr4) {
    let pro1iva = pr1 * 1.2;
    return pro1iva;
    let pro2iva = pr2 * 1.2;
    return pro2iva;
    let pro3iva = pr3 * 1.2;
    return pro3iva;
    let pro4iva = pr4 * 1.2;
    return pro4iva

    function cuota(pr1, pr2, pr3, pr4) {
        let cuota1 = (pr1 * 1.2) / 6;
        return cuota1;
        let cuota2 = (pr2 * 1.2) / 6;
        return cuota2;
        let cuota3 = (pr3 * 1.2) / 6;
        return cuota3;
        let cuota4 = (pr4 * 1.2) / 6;
        return cuota4;


    }

}

console.log("valor producto 1 + iva " + " " + iva(pr1));
console.log("valor producto 2 + iva " + " " + iva(pr2));
console.log("valor producto 3 + iva " + " " + iva(pr3));
console.log("valor producto 4 + iva " + " " + iva(pr4));