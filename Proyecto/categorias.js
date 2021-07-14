let dejson = localStorage.getItem("productostotal")
const productos = JSON.parse(dejson)
let div = document.getElementById("tittle")
let titulo = document.createElement("h1")
titulo.setAttribute("class", "text-center mt-5")
div.appendChild(titulo)
titulo.textContent = "Elija el genero que desea ver"

let cattest = []
const body = document.body

let imprimirCatJazz = document.getElementById("jazz")
imprimirCatJazz.addEventListener("click", imprimirjazz)


let imprimirCatRock = document.getElementById("rock")
imprimirCatRock.addEventListener("click", imrpimirRock)


let imprimirCatRockprog = document.getElementById("rock.prog")
imprimirCatRockprog.addEventListener("click", imrpimirRockprog)


let imprimirCatBlues = document.getElementById("blues")
imprimirCatBlues.addEventListener("click", imprimirCatBlues)

let imprimirCatRocknacional = document.getElementById("rock.nacional")
imprimirCatRocknacional.addEventListener("click", imprimirCatRocknacional)




function imprimirjazz() {




    if (imprimirCatJazz.addEventListener = true) {
        remove()
        let productosj = productos.filter(Productosj => Productosj.genero === "jazz");

        let idImprimirj = document.getElementById("cardscat")

        productosj.forEach(e => {
            idImprimirj.innerHTML += `
        <div class="card" style="width: 20rem;margin:20px;">
        <img src="${e.img}" class="cards card-img-top" alt="...">
        <div class="cards" style="width: 18.5rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.genero}</li>
                <li class="list-group-item">${e.banda}</li>
                <li class="list-group-item">Precio : ${e.precio} $</li>
                <a href="" class="btn btn-dark" role="button" data-bs-toggle="button">Comprar</a>
                </ul>
        
            </div>
        </div>`



        })

        console.log(productosj);

        body.setAttribute("style", "background-color : red")

        let carta = document.getElementsByClassName("card")
        for (const cards of carta) {
            cards.setAttribute("style", "background-color:black;width:20rem;margin:1rem;")
        }
        let lista = document.getElementsByClassName("cards")
        for (const val of lista) {
            val.setAttribute("style", "border-color:gray;background-color:black")
        }

        let list = document.getElementsByClassName("list-group-item")
        for (const val of list) {
            val.setAttribute("style", "background-color:black;color:white;border-color:gray")
        }
    }


}


function imrpimirRock() {
    if (imprimirCatRock.addEventListener = true) {
        remove()
        let productosr = productos.filter(Productosr => Productosr.genero === "rock")
        let idImprimirR = document.getElementById("cardscat")

        productosr.forEach(e => {
            idImprimirR.innerHTML += `
        <div class="card" style="width: 20rem;margin:20px;">
        <img src="${e.img}" class="card-img-top" alt="...">
        <div class="cards" style="width: 18.5rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.genero}</li>
                <li class="list-group-item">${e.banda}</li>
                <li class="list-group-item">Precio : ${e.precio} $</li>
                <a href="#" class="btn btn-dark" role="button" data-bs-toggle="button">Comprar</a>
                </ul>
        
            </div>
        </div>`
        })

        console.log(productosr);

        body.setAttribute("style", "background-color : firebrick")

        let carta = document.getElementsByClassName("card")
        for (const cards of carta) {
            cards.setAttribute("style", "background-color:black;width:20rem;margin:1rem;")
        }
        let lista = document.getElementsByClassName("cards")
        for (const val of lista) {
            val.setAttribute("style", "border-color:gray;background-color:black")
        }

        let list = document.getElementsByClassName("list-group-item")
        for (const val of list) {
            val.setAttribute("style", "background-color:black;color:white;border-color:gray")
        }
    }


}


function imrpimirRockprog() {


    if (imprimirCatRock.addEventListener = true) {

        let productosrp = productos.filter(Productosr => Productosr.genero === "rock prog")
        let idImprimirRp = document.getElementById("cardscat")

        productosrp.forEach(e => {
            idImprimirRp.innerHTML += `
        <div class="card" style="width: 20rem;margin:20px;">
        <img src="${e.img}" class="card-img-top" alt="...">
        <div class="cards" style="width: 18.5rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.genero}</li>
                <li class="list-group-item">${e.banda}</li>
                <li class="list-group-item">Precio : ${e.precio} $</li>
                <a href="#" class="btn btn-dark" role="button" data-bs-toggle="button">Comprar</a>
                </ul>
        
            </div>
        </div>`
        })
        console.log(productosrp);

        body.setAttribute("style", "background-color : rebeccapurple")
        let carta = document.getElementsByClassName("card")
        for (const cards of carta) {
            cards.setAttribute("style", "background-color:black;width:20rem;margin:1rem;")
        }
        let lista = document.getElementsByClassName("cards")
        for (const val of lista) {
            val.setAttribute("style", "border-color:gray;background-color:black")
        }

        let list = document.getElementsByClassName("list-group-item")
        for (const val of list) {
            val.setAttribute("style", "background-color:black;color:white;border-color:gray")
        }

    }

}

function remove() {


}



/**


function imprimir() {

    let idImprimir = document.getElementById("cardscat")

    productos.forEach(e => {
        idImprimir.innerHTML += `
        <div class="cards" style="width: 18.5rem;">
        <img src="${e.img}" class="card-img-top" style="width: 18.5rem;" alt="...">
        <div class="card" style="width: 18.5rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.genero}</li>
                <li class="list-group-item">${e.banda}</li>
                <li class="list-group-item">${e.precio}</li>
                <a href="#" class="btn btn-dark" role="button" data-bs-toggle="button">Comprar</a>
                </ul>
        
            </div>
        </div>`
    })

} * 
*/



function estilo() {

    body.setAttribute("style", "background-color : orange")


    let carta = document.getElementsByClassName("cards")
    for (const cards of carta) {
        cards.setAttribute("style", "background-color:black")
    }
    let list = document.getElementsByClassName("list-group-item")
    for (const val of list) {
        val.setAttribute("style", "background-color:black;color:gray")
    }
    /*  if (cat === "jazz") {
             body.setAttribute("style", "background-color : #E04422")

         } else if (cat === "blues") {
             body.setAttribute("style", "background-color : #E09445")
         } else if (cat === "rock prog") {
             body.setAttribute("style", "background-color : red")
         } else if (cat === "rock") {
             body.setAttribute("style", "background-color : gray")
         } else {
             body.setAttribute("style", "background-color : black")
         }
          
          */
}

estilo()