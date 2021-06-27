class Microfonos {
    constructor(nombre, precio, disponible, marca, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
        this.marca = marca;
        this.stock = stock;
    }
    comprar() {
        if (this.stock > 0) {
            console.log(`usted compro ${this.nombre} y quedad ${this.stock} en stock `);
            this.stock = this.stock - 1;
        } else {
            this.disponible = false;
            let error = `no hay mas stock de  ${this.nombre}`;
            console.log(error);
        }
    }
}

const AKG = new Microfonos("akg 414", 30000, true, "Akg", 5);
const SHURE = new Microfonos("shure 7mb", 55000, true, "Shure", 5);
const SENH = new Microfonos("Senhheisser 945", true, 25000, "Senhheisser", 4);
const b52 = new Microfonos("Beta 52", 15000, true, "Shure", 3);

console.log(AKG);
console.log(SHURE);
console.log(SENH);
console.log(b52);

AKG.comprar();
AKG.comprar();
AKG.comprar();
AKG.comprar();
AKG.comprar();
AKG.comprar();