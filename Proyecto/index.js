/*let div = document.querySelector("#tittle")
let titulo = document.createElement("h1")
titulo.setAttribute("class", "text-center mt-5")
div.appendChild(titulo)
titulo.textContent = "Venta online de vinilos"*/

$("#tittle").append(`<h1>Tienda online de vinilos</h1>`)

/*
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
        
    }



}


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

*/
productos = []
let url = `js/productos.json`
$.get(url, function(json, estado) {
    if (estado = "success") {
        let productos = json


        imprimir(productos)

        console.log(productos);

    }
})

var cantidad = 0;
var suma = 0;
var sum = 0;

const body = document.body
body.setAttribute("style", "background-color : #EC3E18")
const shopContainer = document.querySelector(`.shoppingCartItemsContainer`)

var ids = []
var carrito = []

var precios = []

/*
$.get(url, function(request, state) {
    console.log(request);
    console.log(state);

    if (state === "success") {


        $("#nav").append(`<div></div>
           
        
        `)
    }

})*/


/////////////////////FUNCIONES/////////////////////////////////////////////////////

function imprimir(productos) {



    ///IMPRIMIR CARDS CON JQUERY
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

        ////ESTILOS DE LAS CARDS CON DOM
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
    });






    /////////////    ///FUNCION AGREGAR A CARRO CREANDO EVENTO       /////////////////////////////////////

    productos.forEach(e => {
        $(`#boton${e.id}`).on(`click`, function() {
            ///se pushea el elemento del producto seleccionado
            carrito.push(e)
                //  STOCK DE PRODUCTOS
                ///restamos una unidad del valor de stock si es igual a cero saltamos la funcion
            if (e.stock > 0) {
                e.stock = e.stock - 1


                //localStorage.setItem("stock", JSON.stringify(e.stock))
                console.log(` te quedan ${e.stock} en stock ${e.banda}`);
            } else {
                alert(`no quedan mas productos de ${e.banda}`)
                return imprimir
            }

            console.log(`compraste un disco de ${e.banda} su precio es de ${e.precio} $`);
            console.log(carrito);



            ///SUMA DE PRECIOS TOTAL
            ///
            precios.push(Number(`${e.precio}`))
            for (var i = 0; i < precios.length; i++) {


                sum += precios.pop()
            }


            let ajson1 = JSON.stringify(carrito)
            localStorage.setItem("carrito", ajson1)

            let ajson2 = JSON.stringify(sum)
            localStorage.setItem("total", ajson2)



            //CONNTADOR DE PRODUCTOS
            ids.push(e.id)

            var cantidad = ids.reduce((contadorId, id) => {
                contadorId[id] = (contadorId[id] || 0) + 1;
                return contadorId
            }, {});


            localStorage.setItem("cantidad", JSON.stringify(cantidad))


            let imprmirCantidad = JSON.parse(localStorage.getItem("cantidad"))



            //////  /////////IMPRIMIR CARRITO         ////

            function imprimirCarrito() {
                ////contador de ids

                for (let key in imprmirCantidad) {
                    var cantidad = Number(`${imprmirCantidad[key]}`)

                }



                ////IMPRESION DE TITULOS DE CARRO
                $(`#carrito`).html(`
                            <div class="col-4 row-1">
                            <h2>Producto</h2> 
                            </div>
                            <div class="col-2 row-1">
                            <h2 class="text-truncate">Precio</h2> 
                            </div>
                            <div class="col-2 row-1">
                            <h2>Cantidad</h2>
                            </div>
                            <div class="col-3 row-1">
                            <h2>Quita producto</h2>
                            </div>

                            `)
                    ///// PRODUCTOS DENTRO DEL CARRO 



                $(`#carro`).append(`
                            <div class="col-4 ">
                            <h3> ${e.banda} </h3> 
                            </div>
                            <div class="col-2 ">
                            <h3 class="text-truncate">${e.precio}$</h3> 
                            </div>
                            <div class="col-2"id="cantidad">
                            <h3>${cantidad}</h3>
                            </div>
                            <div class="col-4 ">
                            <button type="button" id="quitar${e.id}" class="d-grid gap-1 col-1 btn-sm  btn btn-outline-danger">x</button>
                            </div>
                        
                        `)


                console.log(cantidad);




                ///////////IMPRESION DE TOTAL DE PRECIO LINEA 183

                $(`#total`).html(`
                            <div class="col-4 ">
                            <h3> TOTAL </h3> 
                            </div>
                            <div class="col-2 ">
                            <h3 class="text-truncate">${sum}$</h3> 
                            </div>
                            <div class="col-2 ">
                            <button class="btn btn-success me-md-2" type="button">Comprar</button>
                            </div>
                            <div class="col-4 ">
                            <button class="botonvaciar btn-secondary" type="button">Vaciar carrito</button>
                            </div>
                        
                        `)





                /////////////////////Bton para sacar de a un producto



                carrito.forEach(e => {
                    $(`#quitar${e.id}`).on(`click`, function(e) {

                        carrito[e.id].splice()
                            /* let borrar = JSON.parse(localStorage.getItem("carrito"))
                             let actualizado = borrar.filter(e => e.id != id)
                             let quitar = localStorage.setItem("carrito", JSON.stringify(actualizado))
                             console.log(quitar);
                             $(`.carro`).html(`${quitar}$`)*/

                    })


                })




                /////////////////////Boton para vaciar carrito
                $(`.botonvaciar`).on(`click`, function() {


                    carrito = []
                    precios = []
                    ids = []
                    sum = 0
                    cantidad = 0









                    $(`#carro`).html(` `)
                    $(`#total`).html(` 
                    
                            <div class="col-4 ">
                            <h3> TOTAL </h3> 
                            </div>
                            <div class="col-2 ">
                            <h3 class="text-truncate">${sum}$</h3> 
                            </div>`)





                    console.log(carrito);



                })


            }


            imprimirCarrito()
        })

    })


    ///GUARDAR DATOS EN JSON

    let ajson1 = JSON.stringify(carrito)
    localStorage.setItem("carrito", ajson1)

    let ajson2 = JSON.stringify(sum)
    localStorage.setItem("total", ajson2)









}