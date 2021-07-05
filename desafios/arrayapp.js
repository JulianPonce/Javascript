/*let micros = { "ak414": 30000, "sen935": 18000, "b52": 10000 };
let auris = { "AT50": 25000, "sonymdr": 20000, "focalspirit": 30000 };


let productos = [auris, micros];


console.log(productos);

let accesorios = ["pipetas", "soportes", "equipos"]

productos.push(accesorios);
console.log(productos);

console.log(productos[1]);

let listcomp = productos.concat(accesorios);

console.log(listcomp);

let listcorta = listcomp.slice(0, 2);
console.log(listcorta);

let listaOrdenada = productos.sort();

console.log(listaOrdenada);



let marcas = ["akg", "shure", "audiotecnica", "sennheiser"]
let marcasOrdenada = marcas.sort();

let listastring = marcasOrdenada.join("-");
console.log(listastring);*/

class ProductosMic {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio
    }
}

const pro1 = new ProductosMic("rev20", 80000);
const pro2 = new ProductosMic("S935", 30000);
const pro3 = new ProductosMic("akg414", 90000);
const pro4 = new ProductosMic("Beta52", 18000);

const Microfonos = []

Microfonos.push(pro1)
Microfonos.push(pro2)
Microfonos.push(pro3)
Microfonos.push(pro4)

console.log(Microfonos);




let MicrofonosOrdenadosPrecio = Microfonos.sort(function(a, b) {
    if (a.precio > b.precio) {
        return -1;
    }
    if (a.precio < b.precio) {
        return 1;
    }
    return 0;


});

console.log(MicrofonosOrdenadosPrecio);


let MicrofonosOrdenadosalf = Microfonos.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1;
    }
    if (a.nombre < b.nombre) {
        return -1;
    }
    return 0;


});


console.log(Microfonos.filter(producto => producto.precio < 50000));

/*let palabra = prompt("ingrese nombre de producto")

console.log(Microfonos.find(producto => producto.nombre == palabra));*/


for (const propiedades of Microfonos) {
    for (const objeto in propiedades) {

        console.log(`${objeto} = ${propiedades[objeto]} sadsd`);
    }
}


Microfonos.forEach(e => { console.log(e.nombre, e.precio) })