// function Juego (nombre, precio, stock){
//     this.nombre = nombre
//     this.precio = precio
//     this.stock = stock
// }

// const juego1 = new Juego ("God of war", 3500, 25)
// const juego2 = new Juego ("Cuphead", 750, 30)
// const juego3 = new Juego ("Hollow Knight", 1200, 30)
// const juego4 = new Juego ("GTA V", 2000, 30)
// const juego5 = new Juego ("Final Fantasy", 450, 30)
// const juego6 = new Juego ("Deep Rock Galactic", 1250, 30)

// const juegosFisicos = [juego1, juego2, juego3, juego4, juego5, juego6]

// const nombreJuegos = []


// function agregarJuego() {
// for(const juego of juegosFisicos){
//     nombreJuegos.push(juego.nombre)        
// }
// }

// agregarJuego()

// //nombreJuegos.sort()

// nombreJuegos.sort((a, b) => {
// if (a > b) {
//   return 1;
// }
// if (a < b) {
//   return -1;
// }
// return 0;
// });

// let descripcionJuego = document.querySelectorAll(".descripcion-juego")
// console.log(descripcionJuego)
// function tarjetaDeJuego (juego, descripcionJuego) {

//         let card = document.createElement("div")
//         card.innerHTML = `<h3>${juego.nombre}</h3>
//                           <p> $ ${juego.precio}</p>
//                           <p>Stock ${juego.stock}</p>
//                           `   
//         descripcionJuego.append(card)
// }

// tarjetaDeJuego ( juego1, descripcionJuego[0])
// tarjetaDeJuego ( juego2, descripcionJuego[1])
// tarjetaDeJuego ( juego3, descripcionJuego[2])
// tarjetaDeJuego ( juego4, descripcionJuego[3])
// tarjetaDeJuego ( juego5, descripcionJuego[4])
// tarjetaDeJuego ( juego6, descripcionJuego[5])





// let cantidadJuego = 0;

// let precioTotal = 0;

// function precioFinal (cantidad, precio) {
// precioTotal += cantidad * precio

// }

// function stockCompra(cantidadDeJuegos, juego) {
 
//  precioFinal (cantidadDeJuegos, juego.precio);
// if (juego.stock >= cantidadDeJuegos){
 
  //facturaFinal()

// } 
// else{
//   alert("no tenemos esa cantidad en stock")
// }

// }



// let cantidadDeJuegos = 0;

// function inputHandler(e) {
//   cantidadDeJuegos = e.target.value

// compra()
// }


// let input = document.getElementById("cantidadeDeJuegos")
// input.addEventListener ("change", inputHandler)

// function compra(){

//     let comprarJuego
//     let listaDesplegable = document.getElementById("listaDesplegable")
//     listaDesplegable.addEventListener("change", respuestaClick)
//     function respuestaClick(e){  comprarJuego = e.target.value 
//       console.log(comprarJuego)

      
//       if (comprarJuego == "god of war"){
//       stockCompra(cantidadDeJuegos, juego1)
//       }

//       else if (comprarJuego == "cuphead"){
//       stockCompra(cantidadDeJuegos, juego2)
//       }

//       else if (comprarJuego == "hollow knight"){
//       stockCompra(cantidadDeJuegos, juego3)
//       }

//       else if (comprarJuego == "gta v"){
//       stockCompra(cantidadDeJuegos, juego4)
//       }

//       else if (comprarJuego == "final fantasy"){
//       stockCompra(cantidadDeJuegos, juego5)
//       }

//       else if (comprarJuego == "deep rock galactic"){
//       stockCompra(cantidadDeJuegos, juego6)
//       }
//       else {
//         alert("Seleccione una opcion correcta")
//         }
    
  
  


// // switch(true){
// // case precioTotal >= 2000 && precioTotal < 2500: 
// //     precioTotal = precioTotal * 0.90
// //     alert("recibiste un 10% de descuento por tu compra")
// //     alert(`El precio final es de ${precioTotal} pesos`)
// //     break;
// // case precioTotal >= 2500:
// //     precioTotal = precioTotal * 0.80
// //    alert("recibiste un 20% de descuento por tu compra")
// //    alert(`El precio final es de ${precioTotal} pesos`)
// //     break;
// // default:
// //         alert("el precio final es de " + precioTotal + " pesos")
// //         break;
// //    }


//   }
 
// }


// let botonCompra = document.getElementById("botonCompra")
// botonCompra.addEventListener("click", facturaFinal)
// console.log(botonCompra)
// let factura = document.getElementById("facturaDeCompra")


// function facturaFinal(juego) {
    
//     factura.innerHTML = " "
//     let divFactura = document.createElement("div")
//     divFactura.innerHTML = `<h4> Compraste ${juego.nombre}</h4>
//                             <h4>El precio final es de ${precioTotal}</h4>`
//                           factura.append(divFactura)

// }


















// function Juego (nombre, precio, stock){
//   this.nombre = nombre
//   this.precio = precio
//   this.stock = stock
// }

// const juego1 = new Juego ("God of war", 3500, 25)
// const juego2 = new Juego ("Cuphead", 750, 30)
// const juego3 = new Juego ("Hollow Knight", 1200, 30)
// const juego4 = new Juego ("GTA V", 2000, 30)
// const juego5 = new Juego ("Final Fantasy", 450, 30)
// const juego6 = new Juego ("Deep Rock Galactic", 1250, 30)

// const juegosFisicos = [juego1, juego2, juego3, juego4, juego5, juego6]

// const nombreJuegos = []


// function agregarJuego() {
// for(const juego of juegosFisicos){
//   nombreJuegos.push(juego.nombre)        
// }
// }

// agregarJuego()

// //nombreJuegos.sort()

// nombreJuegos.sort((a, b) => {
// if (a > b) {
// return 1;
// }
// if (a < b) {
// return -1;
// }
// return 0;
// });

// let descripcionJuego = document.querySelectorAll(".descripcion-juego")
// console.log(descripcionJuego)
// function tarjetaDeJuego (juego, descripcionJuego) {

//       let card = document.createElement("div")
//       card.innerHTML = `<h3>${juego.nombre}</h3>
//                         <p> $ ${juego.precio}</p>
//                         <p>Stock ${juego.stock}</p>
//                         `   
//       descripcionJuego.append(card)
// }

// tarjetaDeJuego ( juego1, descripcionJuego[0])
// tarjetaDeJuego ( juego2, descripcionJuego[1])
// tarjetaDeJuego ( juego3, descripcionJuego[2])
// tarjetaDeJuego ( juego4, descripcionJuego[3])
// tarjetaDeJuego ( juego5, descripcionJuego[4])
// tarjetaDeJuego ( juego6, descripcionJuego[5])





// // let cantidadJuego = 0;

// let precioTotal = 0;

// function precioFinal (cantidad, precio) {
// precioTotal += cantidad * precio

// }

// function stockCompra(cantidadDeJuegos, juego) {

// precioFinal (cantidadDeJuegos, juego.precio);
// if (juego.stock >= cantidadDeJuegos){
//   let botonCompra = document.getElementById("botonCompra")
//   botonCompra.addEventListener("click", facturaFinal)
  
//   let factura = document.getElementById("facturaDeCompra")
//   console.log(botonCompra)
  
//   function facturaFinal() {
    
//     factura.innerHTML = " "
//     let divFactura = document.createElement("div")
//     divFactura.innerHTML = `<h4> Compraste ${juego.nombre}</h4>
//                             <h4>El precio final es de ${precioTotal}</h4>`
//                           factura.append(divFactura)
  
//   }


// } 
// else{
//   let botonCompra = document.getElementById("botonCompra")
//   botonCompra.addEventListener("click", facturaFinal)
//   console.log(botonCompra)
//   let factura = document.getElementById("facturaDeCompra")
  
  
//   function facturaFinal() {
    
//     factura.innerHTML = " "
//     let divFactura = document.createElement("div")
//     divFactura.innerHTML = `<h4> No tenemos esa cantidad de Stock</h4>`
                            
//                           factura.append(divFactura)
  
//   }

// }

// }

// let input = document.getElementById("cantidadeDeJuegos")
// input.addEventListener ("change", inputHandler)

// let cantidadDeJuegos = 0;

// function inputHandler(e) {
// cantidadDeJuegos = e.target.value

// //compra()
// }




// // function compra(){

//   let comprarJuego
//   let listaDesplegable = document.getElementById("listaDesplegable")
//   listaDesplegable.addEventListener("change", respuestaClick)
//   function respuestaClick(e){  comprarJuego = e.target.value 
//     console.log(comprarJuego)

    
//     if (comprarJuego == "god of war"){
//     stockCompra(cantidadDeJuegos, juego1)
//     }

//     else if (comprarJuego == "cuphead"){
//     stockCompra(cantidadDeJuegos, juego2)
//     }

//     else if (comprarJuego == "hollow knight"){
//     stockCompra(cantidadDeJuegos, juego3)
//     }

//     else if (comprarJuego == "gta v"){
//     stockCompra(cantidadDeJuegos, juego4)
//     }

//     else if (comprarJuego == "final fantasy"){
//     stockCompra(cantidadDeJuegos, juego5)
//     }

//     else if (comprarJuego == "deep rock galactic"){
//     stockCompra(cantidadDeJuegos, juego6)
//     }
//     else {
//       alert("Seleccione una opcion correcta")
//       }
  




// switch(true){
// case precioTotal >= 2000 && precioTotal < 2500: 
//     precioTotal = precioTotal * 0.90
//     alert("recibiste un 10% de descuento por tu compra")
//     alert(`El precio final es de ${precioTotal} pesos`)
//     break;
// case precioTotal >= 2500:
//     precioTotal = precioTotal * 0.80
//    alert("recibiste un 20% de descuento por tu compra")
//    alert(`El precio final es de ${precioTotal} pesos`)
//     break;
// default:
//         alert("el precio final es de " + precioTotal + " pesos")
//         break;
//    }


//}

// }


// let botonCompra = document.getElementById("botonCompra")
// botonCompra.addEventListener("click", facturaFinal)
// console.log(botonCompra)
// let factura = document.getElementById("facturaDeCompra")


// function facturaFinal(juego) {
  
//   factura.innerHTML = " "
//   let divFactura = document.createElement("div")
//   divFactura.innerHTML = `<h4> Compraste ${juego.nombre}</h4>
//                           <h4>El precio final es de ${precioTotal}</h4>`
//                         factura.append(divFactura)

// }