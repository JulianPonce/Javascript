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
        <div class="card" style="width: 15rem;">
        <img src="${e.img}" class="card-img-top" alt="...">
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
    if ("jazz" == true) {
        body.setAttribute("style", "background-color = #E04422")

    } else if (cat === "blues") {
        body.setAttribute("style", "background-color = #E09445")
    }

}

imprimircat();
estilo()