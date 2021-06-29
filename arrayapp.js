let micros = { "ak414": 30000, "sen935": 18000, "b52": 10000 };
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
console.log(listastring);