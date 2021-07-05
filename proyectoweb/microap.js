let deJson = localStorage.getItem("productos")
const productostotal = JSON.parse(deJson)


console.log(productostotal);


let microfonos = productostotal.filter(Productos => Productos.categoria == "microfonos");
console.log(microfonos);