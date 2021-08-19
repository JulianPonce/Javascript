//////CREAMOS CONST DE LA URL DE NUESTRO ARCHIVO JSON

const URLJSON = "json/biografias.json"

/////USAMOS AJAX CON JQUERY PARA MANIPULAR E IMPRIMIR NUESTROS DATOS DEL JSON
$.getJSON(URLJSON, function(respuesta, estado) {
    if (estado === "success") {
        let misDatos = respuesta;
        console.log(misDatos);
        for (const dato of misDatos) {
            $("#bio").prepend(`

        <div class="card mb-3" style="max-width: auto;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${dato.img}" widht ="300px" height ="300px" class=" rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${dato.banda}</h5>
                <p class="card-text">${dato.biografia}</p>
                <p class="card-text"><small class="text-muted" id="genero"> Genero : ${dato.genero}</small></p>
              </div>
            </div>
          </div>
        </div>
        
        `)
        }
    }
});