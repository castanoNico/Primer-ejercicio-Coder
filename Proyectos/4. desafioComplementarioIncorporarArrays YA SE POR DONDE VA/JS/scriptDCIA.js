function Entrada (nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}



const entradaShowMayores = new Entrada("-Entrada de mayores", 800, 25)
const entradaShowMenores = new Entrada("-Entrada de menores", 400, 25)


const tickets = [entradaShowMayores , entradaShowMenores]


const nombreTicket = []


function mostrarOpciones() {
    for(const entrada of tickets){
        nombreTicket.push(entrada.nombre)
        
    }
}


// OTRA MANERA DE DECLARAR LA function
// const mostrarOpciones = function() {
//     for(const entrada of tickets){
//         nombreTicket.push(entrada.nombre)
        
//     }
// }


mostrarOpciones()

console.log(nombreTicket)

alert("Bienvenido a la preventa de entradas para el Show del codigo")
alert("Descuentos:\nCon tu compra de $1200 o más, obtenes un 10% de descuento.\nCon tu compra de $2500 o más, obtenes un 20% de descuento");



function precioFinal (cantidad, precio) {  
precioTotal += cantidad * precio
}

function stockCompra (cantidad, entrada){
precioFinal(cantidad, entrada.precio);
if(entrada.stock >= cantidad){
    alert("Tu compra de " + cantidad + " entradas se realizo con exito");
}
else{
     alert("No tenemos esa cantidad de entradas");
}
}



let compraEntrada = prompt("Eliga el tipo de entrada que quiere comprar:\n " + nombreTicket.join("\n ") + "\n -Ambas");

let precioTotal = 0;
let ambas = 2;



if (compraEntrada == "Entrada para mayores" || compraEntrada == "entrada para mayores" ) {
let cantidadEntradaMayores = prompt("Cuantas entradas para mayores quiere?"); 
    stockCompra(cantidadEntradaMayores, entradaShowMayores)
}


else if(compraEntrada == "Entrada para menores" || compraEntrada == "entrada para menores"){
    let cantidadEntradaMenores = prompt("Cuantas entradas para menores quiere?");
        stockCompra(cantidadEntradaMenores, entradaShowMenores)

}

else if(compraEntrada == "Ambas" || compraEntrada == "ambas") {
for(let i = 0; i < ambas; i++){
    let compraEntrada = prompt("Eliga el tipo de entrada que quiere comprar:\n -Entrada para mayores \n -Entrada para menores")
    if (compraEntrada == "Entrada para mayores" || compraEntrada == "entrada para mayores" ) {
        let cantidadEntradaMayores = prompt("Cuantas entradas para mayores quiere?"); 
            stockCompra(cantidadEntradaMayores, entradaShowMayores)
    }
     else if(compraEntrada == "Entrada para menores" || compraEntrada == "entrada para menores"){
            let cantidadEntradaMenores = prompt("Cuantas entradas para menores quiere?");
                stockCompra(cantidadEntradaMenores, entradaShowMenores)
    
    }
}
}

else {
alert("selecione una opcion correcta");
}



switch(true){
case precioTotal >= 1200 && precioTotal < 2500:
    precioTotal = precioTotal * 0.90
    alert("recibiste un 10% de descuento por tu compra")
    alert("el precio final es de " + precioTotal + " pesos")
    break;
case precioTotal >= 2500:
    precioTotal = precioTotal * 0.80
    alert("recibiste un 20% de descuento por tu compra")
    alert("el precio final es de " + precioTotal + " pesos")
    break;
default:
    alert("el precio final es de " + precioTotal + " pesos")
    break;
}


