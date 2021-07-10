let dejson = localStorage.getItem("productostotal")
const productos = JSON.parse(dejson)
let cat = prompt("ingrese la genero de musica.(jazz,rock,rock prog o blues)")

let cattest = []
const body = document.body






function categoriasfilter() {


    let categoriaUser = productos.filter(producto => producto.genero == cat);
    cattest = categoriaUser

}

categoriasfilter()





function imprimircat() {

    let idImprimir = document.getElementById("cardscat")

    cattest.forEach(e => {
        idImprimir.innerHTML += `
        <div class="card" id ="cartas" style="width: 15rem;margin:20px;">
        <img src="${e.img}" class="card-img-top"style="width: auto;" alt="...">
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



function estilo() {
    if (cat === "jazz") {
        body.setAttribute("style", "background-color : #E04422")

    } else if (cat === "blues") {
        body.setAttribute("style", "background-color : #E09445")
    } else if (cat === "rock prog") {
        body.setAttribute("style", "background-color : red")
    } else if (cat === "rock") {
        body.setAttribute("style", "background-color : gray")
    }
    let cards = document.getElementsByClassName("card")
    console.log(cards);
    for (const card of cards) {
        card.setAttribute("style", "background-color : black;")
    }

}








imprimircat();
estilo()