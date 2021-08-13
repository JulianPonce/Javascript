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
const pro14 = new Productos(13, "rock prog", 540, 1, "Yes", true, 1972, `asset/img/yes.jpg`);
const pro15 = new Productos(14, "jazz", 400, 2, "The dave brubeck quartet", true, 1954, `asset/img/takefive.jpg`);
const pro16 = new Productos(15, "rock nacional", 470, 2, "Pescado rabioso", true, 1971, `asset/img/artaud.jpg`);
const pro17 = new Productos(16, "rock nacional", 380, 2, "Invisible", true, 1974, `asset/img/invisible.jpg`);
const pro18 = new Productos(17, "rock nacional", 420, 2, "Pappo Blues", true, 1972, `asset/img/pappoblues.jpg`);

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
const dark = document.getElementById("dark")
const comprar = document.getElementById("comprar")
const cuota6 = document.getElementById("6")
const cuota9 = document.getElementById("9")
const cuota12 = document.getElementById("12")
const cuotas = document.getElementById("cuotas")
    // Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);
menor.addEventListener(`click`, menorPrecio)
mayor.addEventListener(`click`, mayorPrecio)
dark.addEventListener(`click`, cambiarEstilo)
comprar.addEventListener(`click`, comprarProductos)
cuota6.addEventListener(`click`,cuotas6)
cuota9.addEventListener(`click`,cuotas9)
cuota12.addEventListener(`click`,cuotas12)




/////////////////////FUNCIONES/////////////////////////////////////////////////////

/////Generamos la lista de productos ordenada demayorprecio a menor



//////funcion para imprimir cards de mayor a menor precio
function mayorPrecio(event) {
    event.preventDefault()

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
    DOMitems.innerHTML = ` `
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
        const miTitle = document.createElement('h5');
        miTitle.classList.add('card-title');
        //estilos
        miTitle.setAttribute("style", "color:black")
        miTitle.textContent = e.banda;
        ///año
        const miAño = document.createElement('p');
        miAño.classList.add('card-title');
        //estilos
        miAño.setAttribute("style", "color:black")
        miAño.textContent = `Año:` + ` ` + e.año;
        // Imagen
        const miImagen = document.createElement('img');
        miImagen.classList.add('img-fluid');
        miImagen.setAttribute('src', e.img);

        // Precio
        const miPrecio = document.createElement('p');
        miPrecio.classList.add('card-text');
        miPrecio.textContent = `Precio:` + ` ` + e.precio + ` ` + '$';

        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-dark');
        miNodoBoton.textContent = 'Añadir al carro';
        miNodoBoton.setAttribute('marcador', e.id);
        miNodoBoton.addEventListener('click', añadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miImagen);
        miNodoCardBody.appendChild(miTitle);
        miNodoCardBody.appendChild(miAño);
        miNodoCardBody.appendChild(miPrecio);

        miNodoCardBody.appendChild(miNodoBoton);

        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);

    });




}





function menorPrecio(event) {

    event.preventDefault()

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


    DOMitems.innerHTML = ` `
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
        const miTitle = document.createElement('h5');
        miTitle.classList.add('card-title');
        //estilos
        miTitle.setAttribute("style", "color:black")
        miTitle.textContent = e.banda;
        ///año
        const miAño = document.createElement('p');
        miAño.classList.add('card-title');
        //estilos
        miAño.setAttribute("style", "color:black")
        miAño.textContent = `Año:` + ` ` + e.año;
        // Imagen
        const miImagen = document.createElement('img');
        miImagen.classList.add('img-fluid');
        miImagen.setAttribute('src', e.img);

        // Precio
        const miPrecio = document.createElement('p');
        miPrecio.classList.add('card-text');
        miPrecio.textContent = `Precio:` + ` ` + e.precio + ` ` + '$';

        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-dark');
        miNodoBoton.textContent = 'Añadir al carro';
        miNodoBoton.setAttribute('marcador', e.id);
        miNodoBoton.addEventListener('click', añadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miImagen);
        miNodoCardBody.appendChild(miTitle);
        miNodoCardBody.appendChild(miAño);
        miNodoCardBody.appendChild(miPrecio);

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
        const miTitle = document.createElement('h5');
        miTitle.classList.add('card-title');
        //estilos
        miTitle.setAttribute("style", "color:black")
        miTitle.textContent = e.banda;
        ///año
        const miAño = document.createElement('p');
        miAño.classList.add('card-title');
        //estilos
        miAño.setAttribute("style", "color:black")
        miAño.textContent = `Año:` + ` ` + e.año;
        // Imagen
        const miImagen = document.createElement('img');
        miImagen.classList.add('img-fluid');
        miImagen.setAttribute('src', e.img);

        // Precio
        const miPrecio = document.createElement('p');
        miPrecio.classList.add('card-text');
        miPrecio.textContent = `Precio:` + ` ` + e.precio + ` ` + '$';

        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-dark');
        miNodoBoton.textContent = 'Añadir al carro';
        miNodoBoton.setAttribute('marcador', e.id);
        miNodoBoton.addEventListener('click', añadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miImagen);
        miNodoCardBody.appendChild(miTitle);
        miNodoCardBody.appendChild(miAño);
        miNodoCardBody.appendChild(miPrecio);

        miNodoCardBody.appendChild(miNodoBoton);

        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);

    });

}




// Evento para añadir un producto al carrito de la compra

function añadirProductoAlCarrito(evento) {
    // añadimos producto al carrito
    carrito.push(evento.target.getAttribute('marcador'))
        // ejecutamos las funciones correspondiente al carro
    calcularTotal();
    ImprimirCarrito();
    guardarCarritoEnLocalStorage()
    console.log(carrito);
}

function ImprimirCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados con la propiedad newset 
    const carritoSinDuplicados = [...new Set(carrito)];
    // for each para generar carrito
    carritoSinDuplicados.forEach((item) => {
        // obtenemos el item que necesitamos
        const miItem = productos.filter((itemBaseDatos) => {
            //y lo comparamoos si existe un id igual dentro del carro
            return itemBaseDatos.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // si repite id sumamos 1 a la cantidad total
            return itemId === item ? total += 1 : total;
        }, 0);


        // Creamos el nodo del item del carrito
     
        ////IMAGEN CARRO
        const miImagenCarro = document.createElement('img');
        miImagenCarro.classList.add('img-fluid',`img-thumbnail`);
        miImagenCarro.style.height = '130px'
        miImagenCarro.style.width = '130px'
        miImagenCarro.setAttribute('src', miItem[0].img);
    
      
      
        ////NODO CARRO CON EL TEXTO
        const miDisco = document.createElement('h2');
        miDisco.classList.add('text', 'center');
        miDisco.textContent = ` Cantidad: ${numeroUnidadesItem},   Artista: ${miItem[0].banda},   Precio: ${miItem[0].precio}$`;
        miDisco.style.marginTop = `10px`
        // BOTON QUITAR PRODUCTO
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', `d-grid`, `gap-2`);
        miBoton.textContent = 'Quitar producto';
        miBoton.style.marginLeft = '900px';
        miBoton.style.marginBottom = 'auto';
       
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miDisco.appendChild(miImagenCarro)
       
        DOMcarrito.appendChild(miDisco);
       
        miDisco.appendChild(miBoton);
    });
}





/////FUNCION PARA BORAR ITEM DEL CARRO


function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });

    ImprimirCarrito();
    // Calculamos de nuevo el precio
    calcularTotal();
    guardarCarritoEnLocalStorage()
    cuotas12()
    cuotas9()
    cuotas6()
    if(carrito==0){
        cuotas.innerHTML=' '

    }
}











///FUNCION CALCULAR TOTAL DE LA COMPRA

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
    DOMtotal.setAttribute("style", "color:rgb(0, 150, 67)")
}








////    FUNCIONES COMPRAR Y VACIAR CARRO

function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    ImprimirCarrito();
    calcularTotal();
    localStorage.removeItem(carrito)
    cuotas.innerHTML=' '
}

function comprarProductos() {
    if (total === 0) {
        return comprarProductos
    } else {
        alert(`Gracias por su compra de un total de ${total} $`)
        vaciarCarrito()
        console.log(total);
    }
}





////////////////////////FUNCIONES PARA CUOTAS


function cuotas6 (){
    if (total === 0) {
        return cuotas6
    } else {
       total6 = total / 6
       total6 = parseInt(total6)
    }
    console.log(total6);
    cuotas.innerHTML=' '
    $("#cuotas").append(`<h3>6 cuotas de ${total6} $</h3>`)

}
function cuotas9 (){
    if (total === 0) {
        return cuotas9
    } else {
       total9 = total / 9
       total9 = parseInt(total9)
    }
    console.log(total9);
    cuotas.innerHTML=' '
    $("#cuotas").append(`<h3>9 cuotas de ${total9} $</h3>`)

}
function cuotas12 (){
    if (total === 0) {
        return cuotas12
    } else {
       total12 = total / 12
       total12 = parseInt(total12)
    }
    console.log(total12);
    cuotas.innerHTML=' '
    $("#cuotas").append(`<h3>12 cuotas de ${total12} $</h3>`)

}

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

ProductosCards()
cargarCarritoDeLocalStorage()







/////   BOTON DARK MODE AND LIGHT MODE




if (localStorage.getItem("estilo") == "lightmode") {
    lightMode()
} else if (localStorage.getItem("estilo") == "darkmode") {
    darkMode()
}

function lightMode() {

    const body = document.body
    body.setAttribute("style", "background-color : rgb(91, 110, 151)")

    let carta = document.getElementsByClassName("container")
    for (const cards of carta) {
        cards.setAttribute("style", "background-color: rgb(173, 173, 173)")
    }



    localStorage.setItem("estilo", "lightmode")

}

function darkMode() {

    const body = document.body
    body.setAttribute("style", "background-color : rgb(44, 0, 61)")

    let carta = document.getElementsByClassName("container")
    for (const cards of carta) {
        cards.setAttribute("style", "background-color: black")
    }

localStorage.setItem("estilo", "darkmode")


}

function cambiarEstilo(event) {
    event.preventDefault()
    if (localStorage.getItem("estilo") == "lightmode") {
        darkMode()
    } else {
        if (localStorage.getItem("estilo") == "darkmode") {
            lightMode()
        }
    }
    localStorage.setItem(estilo, value)
}

localStorage.setItem(estilo, value)