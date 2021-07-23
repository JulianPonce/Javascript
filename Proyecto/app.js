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


const pro1 = new Productos(0, "rock", 350, 3, "Led zepellin:", true, 1970, `asset/img/led-zep.jpg`);
const pro2 = new Productos(1, "jazz", 500, 3, "Miles Davis:", true, 1953, `asset/img/miles-davis.jpg`);
const pro3 = new Productos(2, "rock", 300, 2, "Queen of te stone age", true, 2013, `asset/img/like-clockwork.jpg`);
const pro4 = new Productos(3, "blues", 430, 3, "Stevie ray vaughan", true, 1981, `asset/img/srv.jpg`);
const pro5 = new Productos(4, "jazz", 600, 5, "Jhon coltrane", true, 1950, `asset/img/coltrane.jpg`);
const pro6 = new Productos(5, "blues", 500, 5, "B.B King", true, 1959, `asset/img/bbking.jpg`);
const pro7 = new Productos(6, "rock prog", 390, 2, "King crimson", true, 1970, `asset/img/King-Crimson-In-the-Court-of-the-Crimson-King.jpg`);
const pro8 = new Productos(7, "rock", 420, 2, "The rolling stone", true, 1971, `asset/img/rolling-stone.jpg`);
const pro9 = new Productos(8, "rock prog", 320, 1, "The mars volta", true, 2006, `asset/img/tmv-amp.jpg`);
const pro10 = new Productos(9, "jazz", 480, 2, "Thelonious monk", true, 1949, `asset/img/monk.jpg`);
const pro11 = new Productos(10, "rock", 380, 2, "Artick Monkeys", true, 2008, `asset/img/artick-monkeys.jpg`);
const pro12 = new Productos(11, "rock", 380, 2, "Jimy Hendrix", true, 1967, `asset/img/hendrix.jpg`);
const pro13 = new Productos(12, "rock nacional", 450, 2, "Charly Garcia", true, 2006, `asset/img/charly.jpg`);
const pro14 = new Productos(13, "rock prog", 540, 1, "Yes", true, 1949, `asset/img/yes.jpg`);
const pro15 = new Productos(14, "jazz", 400, 2, "The dave brubeck quartet", true, 2008, `asset/img/takefive.jpg`);
const pro16 = new Productos(15, "rock nacional", 470, 2, "Pescado rabioso", true, 1967, `asset/img/artaud.jpg`);
const pro17 = new Productos(16, "rock nacional", 380, 2, "Invisible", true, 2008, `asset/img/invisible.jpg`);
const pro18 = new Productos(17, "rock nacional", 420, 2, "Pappo Blues", true, 1967, `asset/img/pappoblues.jpg`);


var cantidad = 0;
var suma = 0;
var sum = 0;
let nav = document.getElementsByClassName("nav-link")
const body = document.body
const shopContainer = document.querySelector(`.shoppingCartItemsContainer`)

var ids = []
const carrito = []
const productos = []
precios = []

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
    ///imprimir cards
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
        <a href="#" class="btn btn-dark" id="boton${e.id}" role="button" data-bs-toggle="button">Añadir a carro</a>
        
        </ul>

    </div>
</div>`)
    });

    /////////////    ///Funcion agregar carro      /////////////////////////////////////
    productos.forEach(e => {
        $(`#boton${e.id}`).on(`click`, function() {


            //  STOCK DE PRODUCTOS
            if (e.stock > 0) {
                e.stock = e.stock - 1;
                console.log(` te quedan ${e.stock} en stock ${e.banda}`);
            } else {
                alert(`no quedan mas productos de ${e.banda}`)
                return imprimir
            }
            carrito.push(e)
            console.log(`compraste un disco de ${e.banda} su precio es de ${e.precio} $`);
            console.log(carrito);


            //CONNTADOR DE PRODUCTOS
            ids.push(e.id)

            var cantidad = ids.reduce((contadorId, id) => {
                contadorId[id] = (contadorId[id] || 0) + 1;
                return contadorId
            }, {});


            console.log(cantidad);

            ///SUMA DE PRECIOS TOTAL
            precios.push(Number(`${e.precio}`))
            for (var i = 0; i < precios.length; i++) {


                sum += precios.pop();
            }



            ////IMPRIMIR CARRITO
            $(`.producto`).append(`<h2> ${e.banda} <h2>`);
            $(`.precio`).append(` <h2> ${e.precio}$<h2>`);
            $(`.cantidad`).append(`<h2>${cantidad.contadorId}<h2>`)
            $(`.quitar`).append(`<button type="button" class="d-grid gap-1 col-1 btn-sm  btn btn-outline-danger">x</button>`)
            $(`.shoppingCartTotal`).html(`<h2>${sum}$</h2> `)





            ///GUARDAR DATOS EN JSON

            let ajson1 = JSON.stringify(carrito)
            localStorage.setItem("carrito", ajson1)

            let ajson2 = JSON.stringify(sum)
            localStorage.setItem("total", ajson2)





        })
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




imprimir()

estilo()