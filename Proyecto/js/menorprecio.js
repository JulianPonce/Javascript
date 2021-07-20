let dejson = localStorage.getItem("productostotal")
const productos = JSON.parse(dejson)



let dejson1 = localStorage.getItem("carrito")
let carrito = JSON.parse(dejson1)

let dejson2 = localStorage.getItem("total")
let total = JSON.parse(dejson2)

let sum = 0
const body = document.body

/*let div = document.getElementById("tittle")
let titulo = document.createElement("h1")
titulo.setAttribute("class", "text-center mt-5")
div.appendChild(titulo)
titulo.textContent = "Menor precio"*/

$("#tittle").append(`<h1>LLista por menor precio</h1>`)


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


function imprimirmenor() {



    listamenorprecio.forEach(e => {
        $("#cardsmenor").append(`
        <div class="cards" style="width: 20rem;margin:1rem">
        <img src="../${e.img}" class="card-img-top" alt="...">
        <div class="card" style="width: 18.5rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.genero}</li>
                <li class="list-group-item">${e.banda}</li>
                <li class="list-group-item">Precio : ${e.precio} $</li>
                <a href="#" class="btn btn-dark" id="boton${e.id}" role="button" data-bs-toggle="button">Comprar</a>
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



            let ajson1 = JSON.stringify(carrito)
            localStorage.setItem("carrito", ajson1)

            let ajson2 = JSON.stringify(sum)
            localStorage.setItem("total", ajson2)

        })
    })




    console.log(total);
    console.log(carrito);





    /* let idImprimir = document.getElementById("cardsmenor")

    listamenorprecio.forEach(e => {
        idImprimir.innerHTML += `
        <div class="cards" style="width: 20rem;margin:1rem">
        <img src="../${e.img}" class="card-img-top" alt="...">
        <div class="card" style="width: 18.5rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.genero}</li>
                <li class="list-group-item">${e.banda}</li>
                <li class="list-group-item">Precio : ${e.precio} $</li>
                <a href="#" class="btn btn-dark" role="button" data-bs-toggle="button">Comprar</a>
            </ul>
        
            </div>
        </div>`
    })*/

}

function estilo() {

    body.setAttribute("style", "background-color : #580F7D")

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



imprimirmenor()
estilo()