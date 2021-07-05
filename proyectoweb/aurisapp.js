let deJson = localStorage.getItem("productos")
const productostotal = JSON.parse(deJson)


console.log(productostotal);

let auriculares = productostotal.filter(Productos => Productos.categoria == "auriculares");
console.log(auriculares);