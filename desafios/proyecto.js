class Productos {
    constructor(id, genero, precio, stock, banda, disponible, año, img, album) {
        this.id = id;
        this.genero = genero;
        this.precio = precio;
        this.stock = stock;
        this.banda = banda;
        this.disponible = disponible;
        this.año = año;
        this.img = img;
        this.album = album
    }
}

const pro1 = new Productos(0, "rock", 350, 4, "Led zepellin", true, 1970, `img/led-zep.jpg`);
const pro2 = new Productos(1, "jazz", 400, 5, "Miles Davis", true, 1953, `img/miles-davis.jpg`);
const pro3 = new Productos(2, "rock", 300, 3, "Queen of te stone age", true, 2013, `img/like-clockwork.jpg`);
const pro4 = new Productos(3, "blues", 200, 3, "Stevie ray vaughan", true, 1981, `img/srv.jpg`);
const pro5 = new Productos(4, "jazz", 400, 5, "Jhon coltrane", true, 1950, `img/coltrane.jpg`);
const pro6 = new Productos(5, "blues", 500, 5, "B.B King", true, 1959, `img/bbking.jpg`);
const pro7 = new Productos(6, "rock prog", 300, 2, "King crimson", true, 1970, `img/King-Crimson-In-the-Court-of-the-Crimson-King.jpg`);
const pro8 = new Productos(7, "rock", 320, 2, "The rolling stone", true, 1971, `img/rolling-stone.jpg`);
const pro9 = new Productos(8, "rock prog", 1000, 1, "The mars volta", true, 2006, `img/tmv-amp.jpg`);
const pro10 = new Productos(9, "jazz", 450, 1, "Thelonious monk", true, 1949, `img/monk.jpg`);
const pro11 = new Productos(10, "rock", 200, 1, "Artick Monkeys", true, 2008, `img/artick-monkeys.jpg`);
const pro12 = new Productos(11, "rock", 150, 1, "Jimy Hendrix", true, 1967, `img/hendrix.jpg`);


const body = document.body
let resultado = document.getElementById("title")
let titulo = document.createElement("h1")
titulo.setAttribute("class", "text-center mt-5")
body.appendChild(titulo)
titulo.textContent = "Galeria"

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
        <img src="${e.img}" class="card-img-top" alt="...">
        <div class="card" style="width: 15rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.genero}</li>
                <li class="list-group-item">${e.banda}</li>
                <li class="list-group-item">${e.precio}</li>
                <a href="#" class="btn btn-dark" role="button" data-bs-toggle="button">Comprar</a>
                </ul>
        
            </div>
        </div>`
    })

}


imprimir()