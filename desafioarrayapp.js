class Personajes {
    constructor(nombre, categoria, genero, squad) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.genero = genero;
        this.squad = squad;
    }
}

const per1 = new Personajes("rz50", "guerrero", "f", 1)
const per2 = new Personajes("b121", "mago", "f", 3)
const per3 = new Personajes("ja21", "mago", "m", 2)
const per4 = new Personajes("lp23", "medico", "m", 2)
const per5 = new Personajes("p102", "mago", "m", 1)
const per6 = new Personajes("kj19", "guerrero", "f", 2)
const per7 = new Personajes("ae43", "medico", "f", 3)
const per8 = new Personajes("rt90", "medico", "m", 1)
const per9 = new Personajes("rg31", "guerrero", "m", 3)

let listapersonajes = []

listapersonajes.push(per1)
listapersonajes.push(per2)
listapersonajes.push(per3)
listapersonajes.push(per4)
listapersonajes.push(per5)
listapersonajes.push(per6)
listapersonajes.push(per7)
listapersonajes.push(per8)
listapersonajes.push(per9)


console.log(listapersonajes);

let listaporsquad = listapersonajes.sort((a, b) => {
    if (a.squad > b.squad) {
        return 1;
    }
    if (a.squad < b.squad) {
        return -1;

    }
    return 0

});


console.log(listaporsquad);


console.log(listapersonajes.filter(Personajes => Personajes.categoria == "guerrero"));
console.log(listapersonajes.filter(Personajes => Personajes.categoria == "mago"));
console.log(listapersonajes.filter(Personajes => Personajes.categoria == "medico"));

console.log(listapersonajes.filter(Personajes => Personajes.genero == "f"));
console.log(listapersonajes.filter(Personajes => Personajes.genero == "m"));