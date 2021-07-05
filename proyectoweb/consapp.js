let deJson = localStorage.getItem("productos")
const productostotal = JSON.parse(deJson)


console.log(productostotal);

let consolas = productostotal.filter(Productos => Productos.categoria == "consolas");

console.log(consolas);