/*  function suma(valor1, valor2) {
let suma = valor1 + valor2
console.log(suma);
}

let numero1 = Number(prompt("ingrese el primer valor"))
let numero2 = Number(prompt("ingrese el segundo valor"))

suma(numero1, numero2)
suma(numero2, 12)
suma(numero1, 30)*/















let mat = Number(prompt("ingrese nota de matematicas"));
let geo = Number(prompt("ingrese nota de geografia"));
let fis = Number(prompt("ingrese nota de fisica"));
let qui = Number(prompt("ingrese nota de quimica"));
let pro = Number(4);

if ((mat <= 0) || (mat > 10) || (geo <= 0) || (geo > 10) || (fis <= 0) || (fis > 10) || (qui <= 0) || (qui > 10)) {
    alert("Datos incorrectos verifique las notas ingresadas")

} else {

    function promedio(mat, geo, fis, qui, pro) {

        let resultado = (mat + geo + fis + qui) / pro
        return resultado;


    }

}


if ((promedio(mat, geo, fis, qui, pro)) >= 6) {

    alert("Tu promedio es" + " " + (promedio(mat, geo, fis, qui, pro) + " " + ",felicidades aprobaste la cursada"))

} else {
    function apro(mat, geo, fis, qui) {

        switch (mat, geo, fis, qui) {
            case (mat < 6):
                alert("desaprobaste matematicas");
                break;
            case (geo < 6):
                alert("desaprobaste geografia");
                break;
            case (fis < 6):
                alert("desaprobaste fisica");
                break;
            case (qui < 6):
                alert("desaprobaste quimica");
                break;
        }
    }

    alert("Tu promedio es" + " " + (promedio(mat, geo, fis, qui, pro) + " " + ", no es suficiente para aprobar la cursada"))

}
if ((mat >= 6) && (geo >= 6) && (fis >= 6) && (qui >= 6)) {
    alert("Felicidades aprobaste todas las materias")
}














/*
let pr1 = Number(prompt("ingrese valor de producto 1 "))
let pr2 = Number(prompt("ingrese valor de producto 2 "))
let pr3 = Number(prompt("ingrese valor de producto 3 "))
let pr4 = Number(prompt("ingrese valor de producto 4 "))

function iva(pr1, pr2, pr3, pr4) {
    let pro1iva = pr1 * 1.2
    return pro1iva;
    let pro2iva = pr2 * 1.2
    return pro2iva;
    let pro3iva = pr3 * 1.2
    return pro3iva;
    let pro4iva = pr4 * 1.2
    return pro4iva



}

function cuota(pr1, pr2, pr3, pr4) {
    let cuota1 = (pr1 * 1.2) / 6
    return cuota1;
    let cuota2 = (pr2 * 1.2) / 6
    return cuota2;
    let cuota3 = (pr3 * 1.2) / 6
    return cuota3;
    let cuota4 = (pr4 * 1.2) / 6
    return cuota4;


}

function cuota2(pr1, pr2, p3, pr4) {
    let cuota_1 = (pr1 * 1.2) / 12
    return cuota_1;
    let cuota_2 = (pr2 * 1.2) / 12
    return cuota2;
    let cuota_3 = (pr3 * 1.2) / 12
    return cuota3;
    let cuota_4 = (pr4 * 1.2) / 12
    return cuota4;

}

console.log("Valor producto 1 + iva " + " " + iva(pr1));
console.log("valor producto 2 + iva " + " " + iva(pr2));
console.log("Valor producto 3 + iva " + " " + iva(pr3));
console.log("valor producto 4 + iva " + " " + iva(pr4));

console.log("Posible pago en 6 cuotas de " + " " + cuota(pr1));
console.log("Posible pago en 6 cuotas de " + " " + cuota(pr2));
console.log("Posible pago en 6 cuotas de " + " " + cuota(pr3));
console.log("Posible pago en 6 cuotas de " + " " + cuota(pr4));

console.log("Posible pago en 12 cuotas de " + " " + cuota2(pr1));
console.log("Posible pago en 12 cuotas de " + " " + cuota2(pr2));
console.log("Posible pago en 12 cuotas de " + " " + cuota2(pr3));
console.log("Posible pago en 12 cuotas de " + " " + cuota2(pr4));*/