let deJson = localStorage.getItem("productos")
const productostotal = JSON.parse(deJson)


console.log(productostotal);

console.log(productostotal.filter(Productos => Productos.categoria == "auriculares"));