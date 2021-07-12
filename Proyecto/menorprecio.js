let dejson = localStorage.getItem("productostotal")
const productos = JSON.parse(dejson)

const body = document.body


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

    let idImprimir = document.getElementById("cardsmenor")

    listamenorprecio.forEach(e => {
        idImprimir.innerHTML += `
        <div class="card" style="width: 20rem;margin:1rem">
        <img src="${e.img}" class="card-img-top" alt="...">
        <div class="cards" style="width: 18.5rem;">
            
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

function estilo() {

    body.setAttribute("style", "background-color : gray")

    let carta = document.getElementsByClassName("card")
    for (const val1 of carta) {
        val1.setAttribute("style", "background-color:black;width:20rem;margin:1rem")
    }
    let list = document.getElementsByClassName("list-group-item")
    for (const val of list) {
        val.setAttribute("style", "background-color:black;color:gray")
    }

}

estilo()

imprimirmenor()