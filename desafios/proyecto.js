class Productos {
    constructor(id, categoria, precio, stock, marca, disponible) {
        this.id = id;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        this.marca = marca;
        this.disponible = disponible;

    }
}

const pro1 = new Productos(0, "Remera", 1200, 4, "Nike", true);
const pro2 = new Productos(1, "Zapatillas", 8000, 5, "Adidas", true);
const pro3 = new Productos(2, "Remera", 3000, 3, "Adidas", true);
const pro4 = new Productos(3, "Pantalon", 2000, 3, "Puma", true);
const pro5 = new Productos(4, "Botines", 4000, 5, "Puma", true);
const pro6 = new Productos(5, "Botines", 5000, 5, "Adidas", true);
const pro7 = new Productos(6, "Remera", 3000, 2, "Nike", true);
const pro8 = new Productos(7, "Remera", 3200, 2, "Adidas", true);
const pro9 = new Productos(8, "Zapatillas", 10000, 1, "Puma", true);
const pro10 = new Productos(9, "Pantalon", 4500, 1, "Reebook", true);
const pro11 = new Productos(10, "Zapatillas", 12000, 1, "Reebook", true);
const pro12 = new Productos(11, "Botines", 11500, 1, "Nike", true);





const productos = []

productos.push(pro1)
productos.push(pro2)
productos.push(pro3)
productos.push(pro4)
productos.push(pro5)
productos.push(pro6)
productos.push(pro7)
productos.push(pro8)
productos.push(pro9)
productos.push(pro10)
productos.push(pro11)
productos.push(pro12)


console.log(productos);




let ajson = JSON.stringify(productos)
localStorage.setItem("productostotal", ajson)











function imprimir() {

    let idImprimir = document.getElementById("cardsPro")

    productos.forEach(e => {
        idImprimir.innerHTML += `
        <div class="card" style="width: 15rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card" style="width: 15rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.categoria}</li>
                <li class="list-group-item">${e.marca}</li>
                <li class="list-group-item">${e.precio}</li>
            </ul>
        
            </div>
        </div>`
    })

}


imprimir()