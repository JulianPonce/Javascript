let dejson = localStorage.getItem("productostotal")
const productos = JSON.parse(dejson)

let cattest = []





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

console.log(listamayorprecio);


imprimirmayor()