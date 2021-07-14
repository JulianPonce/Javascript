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
let div = document.getElementById("tittle")
let titulo = document.createElement("h1")
titulo.setAttribute("class", "text-center mt-5")
div.appendChild(titulo)
titulo.textContent = "Venta online de vinilos"


const pro1 = new Productos(0, "rock", 350, 4, "Led zepellin:", true, 1970, `img/led-zep.jpg`);
const pro2 = new Productos(1, "jazz", 500, 4, "Miles Davis:", true, 1953, `img/miles-davis.jpg`);
const pro3 = new Productos(2, "rock", 300, 2, "Queen of te stone age", true, 2013, `img/like-clockwork.jpg`);
const pro4 = new Productos(3, "blues", 430, 3, "Stevie ray vaughan", true, 1981, `img/srv.jpg`);
const pro5 = new Productos(4, "jazz", 600, 5, "Jhon coltrane", true, 1950, `img/coltrane.jpg`);
const pro6 = new Productos(5, "blues", 500, 5, "B.B King", true, 1959, `img/bbking.jpg`);
const pro7 = new Productos(6, "rock prog", 390, 2, "King crimson", true, 1970, `img/King-Crimson-In-the-Court-of-the-Crimson-King.jpg`);
const pro8 = new Productos(7, "rock", 420, 2, "The rolling stone", true, 1971, `img/rolling-stone.jpg`);
const pro9 = new Productos(8, "rock prog", 320, 1, "The mars volta", true, 2006, `img/tmv-amp.jpg`);
const pro10 = new Productos(9, "jazz", 480, 1, "Thelonious monk", true, 1949, `img/monk.jpg`);
const pro11 = new Productos(10, "rock", 380, 1, "Artick Monkeys", true, 2008, `img/artick-monkeys.jpg`);
const pro12 = new Productos(11, "rock", 380, 1, "Jimy Hendrix", true, 1967, `img/hendrix.jpg`);
const pro13 = new Productos(12, "rock nacional", 450, 1, "Charly Garcia", true, 2006, `img/charly.jpg`);
const pro14 = new Productos(13, "rock prog", 540, 1, "Yes", true, 1949, `img/yes.jpg`);
const pro15 = new Productos(14, "jazz", 400, 1, "The dave brubeck quartet", true, 2008, `img/takefive.jpg`);
const pro16 = new Productos(15, "rock nacional", 470, 1, "Pescado rabioso", true, 1967, `img/artaud.jpg`);
const pro17 = new Productos(16, "rock nacional", 380, 1, "Invisible", true, 2008, `img/invisible.jpg`);
const pro18 = new Productos(17, "rock nacional", 420, 1, "Pappo Blues", true, 1967, `img/pappoblues.jpg`);


let nav = document.getElementsByClassName("nav-link")
const body = document.body
    /**

    let resultado = document.getElementById("tittle")
    let titulo = document.createElement("h1")
    titulo.setAttribute("class", "text-center mt-5")
    body.appendChild(titulo)
    titulo.textContent = * 
     */




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
productos.push(pro13)
productos.push(pro14)
productos.push(pro15)
productos.push(pro16)
productos.push(pro17)
productos.push(pro18)
console.log(productos);



let ajson = JSON.stringify(productos)
localStorage.setItem("productostotal", ajson)




//funciones

function imprimir() {

    let idImprimir = document.getElementById("cardsPro")

    productos.forEach(e => {
        idImprimir.innerHTML += `
        <div class="cards" style="width: 20rem;">
        <img src="${e.img}" class="card-img-top" alt="...">
        <div class="card" style="width: 18.5rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.genero}</li>
                <li class="list-group-item">${e.banda}</li>
                <li class="list-group-item">Precio : ${e.precio} $</li>
                <a href="#" class="btn btn-dark" id="boton" role="button" data-bs-toggle="button">Comprar</a>
                </ul>
        
            </div>
        </div>`
    })

}

function estilo() {



    body.setAttribute("style", "background-color : #EC3E18")
    let carta = document.getElementsByClassName("cards")
    for (const cards of carta) {
        cards.setAttribute("style", "background-color:black;width:20rem;margin:1rem;")
    }
    let lista = document.getElementsByClassName("card")
    for (const val of lista) {
        val.setAttribute("style", "border-color:gray")
    }

    let list = document.getElementsByClassName("list-group-item")
    for (const val of list) {
        val.setAttribute("style", "background-color:black;color:white;border-color:gray")
    }

}

function comprar() {
    if (this.stock > 0) {
        this.stock = this.stock - 1;
        console.log(` te quedan ${this.stock} en stock `);
        alert(`Gracias por comprar un  al precio de ${this.precio} `)
        if (this.stock === 1) {
            let pedido = confirm(`te queda un prodcuto de  desea pedir 5 mas ?`);
            if (pedido == true) {
                this.stock = this.stock + 5;
                console.log("Se pidieron 5 productos al proovedor");

            }

        }
    }


}



imprimir()

estilo()