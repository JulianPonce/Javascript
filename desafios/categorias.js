let dejson = localStorage.getItem("productostotal")
const productos = JSON.parse(dejson)
let cat = prompt("ingrese la categoria que desea ver remera, botines, zapatillas o pantalon")

let cattest = []

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


imprimircat()