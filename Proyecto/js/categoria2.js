let dejson = localStorage.getItem("productostotal")
const productos = JSON.parse(dejson)




//---------------------------variables
let cattest = []
const body = document.body

let imprimirCatJazz = document.getElementById("jazz")
imprimirCatJazz.addEventListener("click", imprimir)


let imprimirCatRock = document.getElementById("rock")
imprimirCatRock.addEventListener("click", imprimir)


let imprimirCatRockprog = document.getElementById("rock.prog")
imprimirCatRockprog.addEventListener("click", imprimir)


let imprimirCatBlues = document.getElementById("blues")
imprimirCatBlues.addEventListener("click", imprimir)

let imprimirCatRocknacional = document.getElementById("rock.nacional")
imprimirCatRocknacional.addEventListener("click", imprimir)

let div = document.getElementById("tittle")
let titulo = document.createElement("h1")
titulo.setAttribute("class", "text-center mt-5")
div.appendChild(titulo)
titulo.textContent = "Elija el genero que desea ver"


/*
function imprimir(imprimirCatJazz, imprimirCatRock, imprimirCatRockprog, imprimirCatBlues) {

    switch () {
        case imprimirCatJazz.addEventListener = true:

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
            break;

        case imprimirCatRock.addEventListener = true:

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
            break;


        case imprimirCatRockprog.addEventListener = true:

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
            break;


        case imprimirCatBlues.addEventListener = true:

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
            break;

        default:
            body.setAttribute("style", "background-color : orange")
    }

}*/

function imprimir(imprimirCatJazz, imprimirCatRock, imprimirCatRockprog, imprimirCatBlues) {




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
    } else if (imprimirCatRock.addEventListener = true) {

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



    } else if (imprimirCatRockprog.addEventListener = true) {

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



    } else if (imprimirCatBlues.addEventListener = true) {

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

}
estilo()