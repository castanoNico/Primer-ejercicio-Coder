function Juego (nombre, precio, stock){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
}

const juego1 = new Juego ("God of war", 3500, 25)
const juego2 = new Juego ("Cuphead", 750, 30)
const juego3 = new Juego ("Hollow Knight", 1200, 30)
const juego4 = new Juego ("GTA V", 2000, 30)
const juego5 = new Juego ("Final Fantasy", 450, 30)
const juego6 = new Juego ("Deep Rock Galactic", 1250, 30)

const juegosFisicos = [juego1, juego2, juego3, juego4, juego5, juego6]

const nombreJuegos = []


function agregarJuego() {
    for(const juego of juegosFisicos){
        nombreJuegos.push(juego.nombre)        
    }
}

agregarJuego()

nombreJuegos.sort()

console.log(nombreJuegos)

let cantidadJuego = 0;

let precioTotal = 0;

function precioFinal (cantidad, precio) {
    precioTotal += cantidad * precio

}
function stockCompra(cantidad, juego) {
     cantidad = prompt("Indique la cantidad que quiere comprar de este juego ");
     precioFinal (cantidad, juego.precio);
   if (juego.stock >= cantidad){
    alert(`Compraste ${cantidad} ${juego.nombre}`)
   } 
   else { 
     alert("No tenemos esa cantidad")
   }
}

alert("Bienvenido a Ragnarok: Tu tienda de Juegos")

alert("Estos son los juegos disponibles: \n" + nombreJuegos.join("\n "))

cantidadDeCompras = prompt("Indica la cantidad de Juegos que compraras")

for (let i = 0; i < cantidadDeCompras; i++){

    comprarJuego = prompt("indique el juego que quiere comprar:\n " + nombreJuegos.join("\n ")).toLowerCase()
    
if (comprarJuego == "god of war"){
   stockCompra(cantidadJuego, juego1)
}

else if (comprarJuego == "cuphead"){
    stockCompra(cantidadJuego, juego2)
}

else if (comprarJuego == "hollow knight"){
    stockCompra(cantidadJuego, juego3)
}

else if (comprarJuego == "gta v"){
    stockCompra(cantidadJuego, juego4)
}

else if (comprarJuego == "final fantasy"){
    stockCompra(cantidadJuego, juego5)
}

else if (comprarJuego == "deep rock galactic"){
    stockCompra(cantidadJuego, juego6)
}

else {
    alert("Seleccione una opcion correcta")
}
}

switch(true){
    case precioTotal >= 2000 && precioTotal < 2500: 
        precioTotal = precioTotal * 0.90
        alert("recibiste un 10% de descuento por tu compra")
        alert(`El precio final es de ${precioTotal} pesos`)
        break;
    case precioTotal >= 2500:
        precioTotal = precioTotal * 0.80
        alert("recibiste un 20% de descuento por tu compra")
        alert(`El precio final es de ${precioTotal} pesos`)
        break;
    default:
            alert("el precio final es de " + precioTotal + " pesos")
            break;
}

//agregar lo visto en la clase Funciones de orden superior ------SORT