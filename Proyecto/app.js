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
/*let div = document.querySelector("#tittle")
let titulo = document.createElement("h1")
titulo.setAttribute("class", "text-center mt-5")
div.appendChild(titulo)
titulo.textContent = "Venta online de vinilos"*/

$("#tittle").append(`<h1>Tienda online de vinilos</h1>`)


const pro1 = new Productos(0, "rock", 350, 4, "Led zepellin:", true, 1970, `asset/img/led-zep.jpg`);
const pro2 = new Productos(1, "jazz", 500, 4, "Miles Davis:", true, 1953, `asset/img/miles-davis.jpg`);
const pro3 = new Productos(2, "rock", 300, 2, "Queen of te stone age", true, 2013, `asset/img/like-clockwork.jpg`);
const pro4 = new Productos(3, "blues", 430, 3, "Stevie ray vaughan", true, 1981, `asset/img/srv.jpg`);
const pro5 = new Productos(4, "jazz", 600, 5, "Jhon coltrane", true, 1950, `asset/img/coltrane.jpg`);
const pro6 = new Productos(5, "blues", 500, 5, "B.B King", true, 1959, `asset/img/bbking.jpg`);
const pro7 = new Productos(6, "rock prog", 390, 2, "King crimson", true, 1970, `asset/img/King-Crimson-In-the-Court-of-the-Crimson-King.jpg`);
const pro8 = new Productos(7, "rock", 420, 2, "The rolling stone", true, 1971, `asset/img/rolling-stone.jpg`);
const pro9 = new Productos(8, "rock prog", 320, 1, "The mars volta", true, 2006, `asset/img/tmv-amp.jpg`);
const pro10 = new Productos(9, "jazz", 480, 1, "Thelonious monk", true, 1949, `asset/img/monk.jpg`);
const pro11 = new Productos(10, "rock", 380, 1, "Artick Monkeys", true, 2008, `asset/img/artick-monkeys.jpg`);
const pro12 = new Productos(11, "rock", 380, 1, "Jimy Hendrix", true, 1967, `asset/img/hendrix.jpg`);
const pro13 = new Productos(12, "rock nacional", 450, 1, "Charly Garcia", true, 2006, `asset/img/charly.jpg`);
const pro14 = new Productos(13, "rock prog", 540, 1, "Yes", true, 1949, `asset/img/yes.jpg`);
const pro15 = new Productos(14, "jazz", 400, 1, "The dave brubeck quartet", true, 2008, `asset/img/takefive.jpg`);
const pro16 = new Productos(15, "rock nacional", 470, 1, "Pescado rabioso", true, 1967, `asset/img/artaud.jpg`);
const pro17 = new Productos(16, "rock nacional", 380, 1, "Invisible", true, 2008, `asset/img/invisible.jpg`);
const pro18 = new Productos(17, "rock nacional", 420, 1, "Pappo Blues", true, 1967, `asset/img/pappoblues.jpg`);

let sum = 0;
let nav = document.getElementsByClassName("nav-link")
const body = document.body
const shopContainer = document.querySelector(`.shoppingCartItemsContainer`)


const carrito = []

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

    productos.forEach(e => {
        $("#cardsPro").append(
            `
        <div class="cards" style="width: 20rem;">
        <img src="${e.img}" class="item card-img-top" alt="...">
        <div class="card" style="width: 18.5rem;">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${e.genero}</li>
        <li class="item list-group-item">${e.banda}</li>
        <li class="item list-group-item">Precio : ${e.precio} $</li>
        <a href="#" class="boton btn-dark" id="boton${e.id}" role="button" data-bs-toggle="button">Añadir a carro</a>
       
        </ul>

    </div>
</div>`)
    });

    productos.forEach(e => {
        $(`#boton${e.id}`).on(`click`, function() {



            console.log(`compraste un disco de ${e.banda} su precio es de ${e.precio} $`);

            carrito.push(Number(`${e.precio}`))


            for (let i = 0; i < carrito.length; i++) {
                sum += carrito[i];
            }

            $(`.producto`).append(`<h2> ${e.banda} <h2>`);
            $(`.precio`).append(` <h2> ${e.precio}$<h2>`);

            $(`.shoppingCartTotal`).append(`<h2>${total}$</h2> `)

            let ajson1 = JSON.stringify(carrito)
            localStorage.setItem("carrito", ajson1)

            let ajson2 = JSON.stringify(sum)
            localStorage.setItem("total", ajson2)

        })
    })
}


/*  const agregarCarro = document.querySelectorAll(`.boton`)
  agregarCarro.forEach(agregarCarros => {
      agregarCarros.addEventListener(`click`, clickCompra)
  })


  function clickCompra(event) {
      const buttom = event.target;
      const item = buttom.closest(`.item`)
      console.log(item);

  }*/



























/*
    productos.forEach(e => {
        $(`#boton${e.id}`).on(`click`, function() {



            console.log(`compraste un disco de ${e.banda} su precio es de ${e.precio} $`);

            carrito.push(Number(`${e.precio}`))


            for (let i = 0; i < carrito.length; i++) {
                sum += carrito[i];
            }

            $("#carrito").append(`</h2>compraste un disco de ${e.banda} su precio es de ${e.precio} $ <h2>`);
            $("#totalcarro").append(`<h2>Total = ${total} $</h2> `)

            let ajson1 = JSON.stringify(carrito)
            localStorage.setItem("carrito", ajson1)

            let ajson2 = JSON.stringify(sum)
            localStorage.setItem("total", ajson2)

        })
    })
    productos.forEach(e => {
        $(`#botonquitar${e.id}`).on(`click`, function() {

            let rest = carrito;
            for (let j = 0; j < carrito.length; j++) {


            }


        })
    })
*/




































let dejson1 = localStorage.getItem("carrito")
let carro = JSON.parse(dejson1)

let dejson2 = localStorage.getItem("total")
let total = JSON.parse(dejson2)

console.log(total);
console.log(carro);


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


}



imprimir()

estilo()