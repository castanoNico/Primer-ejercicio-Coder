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

//nombreJuegos.sort()

nombreJuegos.sort((a, b) => {
if (a > b) {
  return 1;
}
if (a < b) {
  return -1;
}
return 0;
});

let descripcionJuego = document.querySelectorAll(".descripcion-juego")
console.log(descripcionJuego)
function tarjetaDeJuego (juego, descripcionJuego) {

        let card = document.createElement("div")
        card.innerHTML = `<h3>${juego.nombre}</h3>
                          <p> $ ${juego.precio}</p>
                          <p>Stock ${juego.stock}</p>
                          `   
        descripcionJuego.append(card)
}

tarjetaDeJuego ( juego1, descripcionJuego[0])
tarjetaDeJuego ( juego2, descripcionJuego[1])
tarjetaDeJuego ( juego3, descripcionJuego[2])
tarjetaDeJuego ( juego4, descripcionJuego[3])
tarjetaDeJuego ( juego5, descripcionJuego[4])
tarjetaDeJuego ( juego6, descripcionJuego[5])




//console.log(nombreJuegos)

let cantidadJuego = 0;

let precioTotal = 0;

function precioFinal (cantidad, precio) {
precioTotal += cantidad * precio

}

// function stockCompra(cantidad, juego) {
//  cantidad = prompt("Indique la cantidad que quiere comprar de este juego ");
//  precioFinal (cantidad, juego.precio);
// if (juego.stock >= cantidad){
// alert(`Compraste ${cantidad} ${juego.nombre}`)
// } 
// else { 
//  alert("No tenemos esa cantidad")
// }
// }

// alert("Bienvenido a Ragnarok: Tu tienda de Juegos")

 //alert("Estos son los juegos disponibles: \n" + nombreJuegos.join("\n "))

let cantidadDeCompras = 0;

function inputHandler(e) {
  cantidadDeCompras = e.target.value

compra()
}


let input = document.getElementById("cantidadDeCompras")
input.addEventListener ("change", inputHandler)

//cantidadDeCompras = prompt("Indica la cantidad de Juegos que compraras")


  // let comprarJuego
  // let listaDesplegable = document.getElementById("listaDesplegable")
  // listaDesplegable.addEventListener("change", respuestaClick)
  // function respuestaClick(e){  comprarJuego = e.target.value 
  //   console.log(comprarJuego)
    
  // }  

function compra(){
  for (let i = 0; i < cantidadDeCompras; i++){

    let comprarJuego
    let listaDesplegable = document.getElementById("listaDesplegable")
    listaDesplegable.addEventListener("change", respuestaClick)
    function respuestaClick(e){  comprarJuego = e.target.value 
      console.log(comprarJuego)
      
     
      // comprarJuego = prompt("indique el juego que quiere comprar:\n " + nombreJuegos.join("\n ")).toLowerCase()
      // let comprarJuego
      // let listaDesplegable = document.getElementById("listaDesplegable")
      // listaDesplegable.addEventListener("change", respuestaClick)
      // function respuestaClick(){  comprarJuego = e.target.value }
      
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
            delete comprarJuego.value  ;
           console.log(comprarJuego)

// switch(true){
// case precioTotal >= 2000 && precioTotal < 2500: 
//     precioTotal = precioTotal * 0.90
//     alert("recibiste un 10% de descuento por tu compra")
//     alert(`El precio final es de ${precioTotal} pesos`)
//     break;
// case precioTotal >= 2500:
//     precioTotal = precioTotal * 0.80
//     alert("recibiste un 20% de descuento por tu compra")
//     alert(`El precio final es de ${precioTotal} pesos`)
//     break;
// default:
//         alert("el precio final es de " + precioTotal + " pesos")
//         break;
//    }
  }
 }
}

