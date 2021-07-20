//-------------------------"base de datos"
let dejson = localStorage.getItem("productostotal")
const productos = JSON.parse(dejson)




//---------------------------variables
let cattest = []
const body = document.body

let imprimirCatJazz = document.getElementById("jazz")
imprimirCatJazz.addEventListener("click", imprimirjazz)


let imprimirCatRock = document.getElementById("rock")
imprimirCatRock.addEventListener("click", imrpimirRock)


let imprimirCatRockprog = document.getElementById("rock.prog")
imprimirCatRockprog.addEventListener("click", imrpimirRockprog)


let imprimirCatBlues = document.getElementById("blues")
imprimirCatBlues.addEventListener("click", imrpimirBlues)

let imprimirCatRocknacional = document.getElementById("rock.nacional")
imprimirCatRocknacional.addEventListener("click", imprimirRocknacional)

/*let div = document.getElementById("tittle")
let titulo = document.createElement("h1")
titulo.setAttribute("class", "text-center mt-5")
div.appendChild(titulo)
titulo.textContent = "Generos disponibles"*/
$("#tittle").append(`<h1>Generos disponibles</h1>`)











//-----------------------------funciones
function imprimirjazz() {


    if (imprimirCatJazz.addEventListener = true) {


        let productosj = productos.filter(Productosj => Productosj.genero === "jazz");

        let idImprimirj = document.getElementById("cardscat")
        idImprimirj.innerHTML = '';
        productosj.forEach(e => {
            idImprimirj.innerHTML += `
        <div class="card" style="width: 20rem;margin:20px;">
        <img src="../${e.img}" class="cards card-img-top" alt="...">
        <div class="cards" style="width: 18.5rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.genero}</li>
                <li class="list-group-item">${e.banda}</li>
                <li class="list-group-item">Precio : ${e.precio} $</li>
                <a href="" class="btn btn-dark" role="button" data-bs-toggle="button">Comprar</a>
                </ul>
        
            </div>
        </div>`


            localStorage.setItem("jazz", JSON.stringify(productosj))
            cattest.push(productosj)


        })

        console.log(productosj);

        body.setAttribute("style", "background-color : rgb(57, 58, 100)")

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

        let productosr = productos.filter(Productosr => Productosr.genero === "rock")
        let idImprimirR = document.getElementById("cardscat")
        idImprimirR.innerHTML = '';
        productosr.forEach(e => {
            idImprimirR.innerHTML += `
        <div class="card" style="width: 20rem;margin:20px;">
        <img src="../${e.img}" class="card-img-top" alt="...">
        <div class="cards" style="width: 18.5rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.genero}</li>
                <li class="list-group-item">${e.banda}</li>
                <li class="list-group-item">Precio : ${e.precio} $</li>
                <a href="#" class="btn btn-dark" role="button" data-bs-toggle="button">Comprar</a>
                </ul>
        
            </div>
        </div>`
            localStorage.setItem("rock", JSON.stringify(productosr))
            cattest.push(productosr)
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

    if (imprimirCatRockprog.addEventListener = true) {

        let productosrp = productos.filter(Productosr => Productosr.genero === "rock prog")
        let idImprimirRp = document.getElementById("cardscat")
        idImprimirRp.innerHTML = '';
        productosrp.forEach(e => {
            idImprimirRp.innerHTML += `
        <div class="card" style="width: 20rem;margin:20px;">
        <img src="../${e.img}" class="card-img-top" alt="...">
        <div class="cards" style="width: 18.5rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.genero}</li>
                <li class="list-group-item">${e.banda}</li>
                <li class="list-group-item">Precio : ${e.precio} $</li>
                <a href="#" class="btn btn-dark" role="button" data-bs-toggle="button">Comprar</a>
                </ul>
        
            </div>
        </div>`

            localStorage.setItem("rock.prog", JSON.stringify(productosrp))
            cattest.push(productosrp)
        })
        console.log(productosrp);

        body.setAttribute("style", "background-color : rgb(128, 39, 39)")
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


function imrpimirBlues() {

    if (imprimirCatBlues.addEventListener = true) {

        let Productosb = productos.filter(Productosbl => Productosbl.genero === "blues")
        let idImprimirb = document.getElementById("cardscat")
        idImprimirb.innerHTML = '';
        Productosb.forEach(e => {
            idImprimirb.innerHTML += `
        <div class="card" style="width: 20rem;margin:20px;">
        <img src="../${e.img}" class="card-img-top" alt="...">
        <div class="cards" style="width: 18.5rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.genero}</li>
                <li class="list-group-item">${e.banda}</li>
                <li class="list-group-item">Precio : ${e.precio} $</li>
                <a href="#" class="btn btn-dark" role="button" data-bs-toggle="button">Comprar</a>
                </ul>
        
            </div>
        </div>`

            localStorage.setItem("blues", JSON.stringify(Productosb))
            cattest.push(Productosb)
        })

        console.log(Productosb);




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

function imprimirRocknacional() {
    if (imprimirCatRocknacional.addEventListener = true) {

        let Productosrn = productos.filter(Productosrn => Productosrn.genero === "rock nacional")
        let idImprimirRn = document.getElementById("cardscat")
        idImprimirRn.innerHTML = '';
        Productosrn.forEach(e => {
            idImprimirRn.innerHTML += `
        <div class="card" style="width: 20rem;margin:20px;">
        <img src="../${e.img}" class="card-img-top" alt="...">
        <div class="cards" style="width: 18.5rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.genero}</li>
                <li class="list-group-item">${e.banda}</li>
                <li class="list-group-item">Precio : ${e.precio} $</li>
                <a href="#" class="btn btn-dark" role="button" data-bs-toggle="button">Comprar</a>
                </ul>
        
            </div>
        </div>`

            localStorage.setItem("rock nacional", JSON.stringify(Productosrn))
            cattest.push(Productosrn)
        })

        console.log(Productosrn);




        body.setAttribute("style", "background-color : rgb(35, 145, 99)")
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


console.log(cattest);
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