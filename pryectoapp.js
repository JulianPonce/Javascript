class Productos {
    constructor(id, modelo, precio, categoria, stock, marca, disponible) {
        this.id = id;
        this.modelo = modelo;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
        this.marca = marca;
        this.disponible = disponible;

    }








    comprar() {
        if ((this.stock > 0) && (confirm = true)) {
            this.stock = this.stock - 1;
            console.log(`se compro un ${this.modelo} te quedan ${this.stock} en stock `);
            alert(`Gracias por comprar un ${this.modelo} al precio de ${this.precio} `)
            if (this.stock === 1) {
                let pedido = confirm(`te queda un prodcuto de ${this.modelo} desea pedir 5 mas ?`);
                if (pedido == true) {
                    this.stock = this.stock + 5;
                    console.log("Se pidieron 5 productos al proovedor");

                }

            }
        } else {
            this.disponible = false;
            let error = `no quedan mas productos de ${this.modelo}`
            alert(error)

        }


    }



}




//nombre, precio, categoria,stock,marca,disponible
const pro1 = new Productos(0, "rev20", 80000, "microfonos", 4, "electro voice", true);
const pro2 = new Productos(1, "S945", 30000, "microfonos", 5, "sennheiser", true);
const pro3 = new Productos(2, "akg414", 90000, "microfonos", 3, "akg", true);
const pro4 = new Productos(3, "Shure7mb", 70000, "microfonos", 3, "shure", true);
const pro5 = new Productos(4, "ATM50", 40000, "auriculares", 5, "audio tecnica", true);
const pro6 = new Productos(5, "Focal spirit", 50000, "auriculares", 5, "Focal", true);
const pro7 = new Productos(6, "mdr 7005", 30000, "auriculares", 2, "Sony", true);
const pro8 = new Productos(7, "HD 25", 32000, "auriculares", 2, "sennheiser", true);
const pro9 = new Productos(8, "S7000", 10000000, "consolas", 1, "allenandheath", true);
const pro10 = new Productos(9, "cl5", 10000000, "consolas", 1, "yamaha", true);
const pro11 = new Productos(10, "sd7", 10000000, "consolas", 1, "digico", true);
const pro12 = new Productos(11, "s6l", 10000000, "consolas", 1, "venue", true);

let productostotal = [];



productostotal.push(pro1)
productostotal.push(pro2)
productostotal.push(pro3)
productostotal.push(pro4)
productostotal.push(pro5)
productostotal.push(pro6)
productostotal.push(pro7)
productostotal.push(pro8)
productostotal.push(pro9)
productostotal.push(pro10)
productostotal.push(pro11)
productostotal.push(pro12)


console.log(productostotal);



let listaOrdenada = []

listaOrdenada.push(pro1)
listaOrdenada.push(pro2)
listaOrdenada.push(pro3)
listaOrdenada.push(pro4)
listaOrdenada.push(pro5)
listaOrdenada.push(pro6)
listaOrdenada.push(pro7)
listaOrdenada.push(pro8)
listaOrdenada.push(pro9)
listaOrdenada.push(pro10)
listaOrdenada.push(pro11)
listaOrdenada.push(pro12)



let listamenorprecio = listaOrdenada.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;

    }
    return 0

});

let listamayorprecio = listaOrdenada.sort((a, b) => {
    if (a.precio > b.precio) {
        return -1;
    }
    if (a.precio < b.precio) {
        return 1;

    }
    return 0

});
console.log(listamenorprecio);
console.log(listamayorprecio);


console.log(productostotal.filter(Productos => Productos.categoria == "microfonos"));

console.log(productostotal.filter(Productos => Productos.categoria == "consolas"));

console.log(productostotal.filter(Productos => Productos.categoria == "auriculares"));



confirm = alert("desea comprar un microfono?,rev20,sen945,akg414 o shure7mb")

let micro = prompt("ingrese el nombre del microfono");

if (micro.toLowerCase() == "rev20") {
    pro1.comprar()
}
if (micro.toLowerCase() == "sen945") {
    pro2.comprar()
}
if (micro.toLowerCase() == "akg414") {
    pro3.comprar()
}
if (micro.toLowerCase() == "shure7mb") {
    pro4.comprar()
}
if ((micro.toLowerCase() != "rev20") && (micro.toLowerCase() != "sen945") && (micro.toLowerCase() != "akg414") && (micro.toLowerCase() != "shure7mb")) {
    alert("Nombre ingresado es incorrecto")
}