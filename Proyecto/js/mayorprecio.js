let dejson = localStorage.getItem("productostotal")
const productos = JSON.parse(dejson)

let cattest = []
const body = document.body

/* let div = document.getElementById("tittle")
// let titulo = document.createElement("h1")
// titulo.setAttribute("class", "text-center mt-5")
// div.appendChild(titulo)
// titulo.textContent = "Mayor precio"*/

$("#tittle").append(`<h1>Lista por mayor precio</h1>`)


let listamayorprecio = productos.sort((a, b) => {
    if (a.precio > b.precio) {
        return -1;
    }
    if (a.precio < b.precio) {
        return 1;

    }
    return 0

});



function imprimirmayor() {

    let idImprimir = document.getElementById("cardsmayor")

    listamayorprecio.forEach(e => {
        idImprimir.innerHTML += `
        <div class="cards" id="cartas" style="width: 20rem;margin:1rem;">
        <img src="../${e.img}" class=" card-img-top" alt="...">
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







console.log(listamayorprecio);


function estilo() {

    body.setAttribute("style", "background-color : #0D9E44")
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



imprimirmayor()
estilo()