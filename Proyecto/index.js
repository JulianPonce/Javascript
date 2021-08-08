/*let div = document.querySelector("#tittle")
let titulo = document.createElement("h1")
titulo.setAttribute("class", "text-center mt-5")
div.appendChild(titulo)
titulo.textContent = "Venta online de vinilos"*/

$("#tittle").append(`<h1>Tienda online de vinilos</h1>`)


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

console.log(productos);
/*productos = []
let url = `js/productos.json`
$.get(url, function(json, estado) {
    if (estado = "success") {
        let productos = json


        imprimir(productos)
        agregarCarro(productos)
        console.log(productos);

    }
})*/







const shopContainer = document.querySelector(`.shoppingCartItemsContainer`)

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const miLocalStorage = window.localStorage;

/////const para generar orden
const mayor = document.getElementById("mayor")
const menor = document.getElementById("menor")


// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);
menor.addEventListener(`click`, menorPrecio)
mayor.addEventListener(`click`, mayorPrecio)
    /////////////////////FUNCIONES/////////////////////////////////////////////////////

/////Generamos la lista de productos ordenada demayorprecio a menor



//////funcion para imprimir cards de mayor a menor precio
function mayorPrecio() {
    let listamayorprecio = productos.sort((a, b) => {
        if (a.precio > b.precio) {
            return -1;
        }
        if (a.precio < b.precio) {
            return 1;

        }
        return 0

    });

    console.log(listamayorprecio);

    listamayorprecio.forEach((e) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-3', );
        //estilos
        miNodo.setAttribute("style", "background-color:rgba(129, 129, 129, 0.651)")

        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body', );
        //estilos
        miNodoCardBody.setAttribute("style", "background-color:gray")

        // Titulo 
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        //estilos
        miNodoTitle.setAttribute("style", "color:black")
        miNodoTitle.textContent = e.banda;

        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', e.img);

        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `Precio:` + ` ` + e.precio + ` ` + '$';

        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-dark');
        miNodoBoton.textContent = 'Añadir al carro';
        miNodoBoton.setAttribute('marcador', e.id);
        miNodoBoton.addEventListener('click', añadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);

    });




}





function menorPrecio() {
    let listamenorprecio = productos.sort((a, b) => {
        if (a.precio > b.precio) {
            return 1;
        }
        if (a.precio < b.precio) {
            return -1;

        }
        return 0

    });

    console.log(listamenorprecio);


    listamenorprecio.forEach((e) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-3', );
        //estilos
        miNodo.setAttribute("style", "background-color:rgba(129, 129, 129, 0.651)")

        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body', );
        //estilos
        miNodoCardBody.setAttribute("style", "background-color:gray")

        // Titulo 
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        //estilos
        miNodoTitle.setAttribute("style", "color:black")
        miNodoTitle.textContent = e.banda;

        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', e.img);

        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `Precio:` + ` ` + e.precio + ` ` + '$';

        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-dark');
        miNodoBoton.textContent = 'Añadir al carro';
        miNodoBoton.setAttribute('marcador', e.id);
        miNodoBoton.addEventListener('click', añadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);

    });




}


function ProductosCards() {
    productos.forEach((e) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-3', );
        //estilos
        miNodo.setAttribute("style", "background-color:rgba(129, 129, 129, 0.651)")

        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body', );
        //estilos
        miNodoCardBody.setAttribute("style", "background-color:gray")

        // Titulo 
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        //estilos
        miNodoTitle.setAttribute("style", "color:black")
        miNodoTitle.textContent = e.banda;

        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', e.img);

        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `Precio:` + ` ` + e.precio + ` ` + '$';

        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-dark');
        miNodoBoton.textContent = 'Añadir al carro';
        miNodoBoton.setAttribute('marcador', e.id);
        miNodoBoton.addEventListener('click', añadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);

    });

}




// Evento para añadir un producto al carrito de la compra

function añadirProductoAlCarrito(evento) {
    // sumamos nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
        // funciones creadas a partir de añadir un producto
    calcularTotal();
    ImprimirCarrito();
    guardarCarritoEnLocalStorage()
    console.log(carrito);
}

function ImprimirCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = productos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-15');

        miNodo.textContent = ` ${numeroUnidadesItem} unidades de ${miItem[0].banda} - ${miItem[0].precio}$`;

        const miImagenCarro = document.createElement('img');
        miImagenCarro.classList.add('img-fluid');

        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', `d-grid`, `gap-2`, `d-md-flex`, `justify-content-mx-end`);
        miBoton.textContent = 'Quitar';
        miBoton.style.marginLeft = '800px';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);

    });
}


function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    ImprimirCarrito();
    // Calculamos de nuevo el precio
    calcularTotal();
    guardarCarritoEnLocalStorage()
}
///Calcula el precio total teniendo en cuenta los productos repetidos



function calcularTotal() {
    // Limpiamos precio anterior
    total = 0;
    // Recorremos el array del carrito
    carrito.forEach((item) => {
        // De cada elemento obtenemos su precio
        const miItem = productos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        total = total + miItem[0].precio;
    });
    // Renderizamos el precio en el HTML
    DOMtotal.textContent = total.toFixed(2);
}





function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    ImprimirCarrito();
    calcularTotal();
    localStorage.clear();
}


// Inicio
ProductosCards();


function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage() {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}


cargarCarritoDeLocalStorage()





/*
    function imprimir() {



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
            <a href="#" class="btn btn-dark" id="boton" role="button" marcador="${e.id}" data-bs-toggle="button">Añadir a carro</a>
            
            </ul>

                </div>
                </div>`)

            ////ESTILOS DE LAS CARDS CON DOM
            estilosCards()

        });




        

       
    }

    imprimir()


    */



function estilosCards() {

    const body = document.body
    body.setAttribute("style", "background-color : rgb(2, 39, 117)")

    let carta = document.getElementsByClassName("container")
    for (const cards of carta) {
        cards.setAttribute("style", "background-color: black")
    }



}

estilosCards()