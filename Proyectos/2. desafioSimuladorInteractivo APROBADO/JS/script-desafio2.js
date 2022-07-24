let entradaShowMayores = "Entrada para Mayores";
let precioMayores = 800;
let stockEntradasMayores = 25;

let entradaShowMenores = "Entrada para Menores";
let precioMenores = 400;
let stockEntradasMenores = 25;

alert("Bienvenido a la preventa de entradas para el Show del codigo")
alert("Descuentos\nCon tu compra de $1200 o más, obtenes un 10% de descuento.\n Con tu compra de $2500 o más, obtenes un 20% de descuento");



function precioFinal (cantidad, precio) {  
    precioTotal += cantidad * precio
}

function stockCompra (stock, cantidad, precio){
    precioFinal(cantidad, precio);
    if(stock > cantidad){
        alert("Tu compra de " + cantidad + " entradas se realizo con exito")
       // alert("El precio es de: " +  (precioMayores * cantidadEntradaMayores) + " pesos");
}
    else{
         alert("No tenemos esa cantidad de entradas");
}
}



let compraEntrada = prompt("Eliga el tipo de entrada que quiere comprar:\n -Entrada para mayores \n -Entrada para menores \n -Ambas");

let precioTotal = 0;
let ambas = 2;




if (compraEntrada == "Entrada para mayores" || compraEntrada == "entrada para mayores" ) {
    let cantidadEntradaMayores = prompt("Cuantas entradas para mayores quiere?"); 
        stockCompra(stockEntradasMayores, cantidadEntradaMayores, precioMayores)
}


else if(compraEntrada == "Entrada para menores" || compraEntrada == "entrada para menores"){
        let cantidadEntradaMenores = prompt("Cuantas entradas para menores quiere?");
            stockCompra(stockEntradasMenores, cantidadEntradaMenores, precioMenores)

}

else if(compraEntrada == "Ambas" || compraEntrada == "ambas") {
    for(let i = 0; i < ambas; i++){
        let compraEntrada = prompt("Eliga el tipo de entrada que quiere comprar:\n -Entrada para mayores \n -Entrada para menores")
        if (compraEntrada == "Entrada para mayores" || compraEntrada == "entrada para mayores" ){
            let cantidadEntradaMayores = prompt("Cuantas entradas para mayores quiere?"); 
                stockCompra(stockEntradasMayores, cantidadEntradaMayores, precioMayores)
        }
        else if(compraEntrada == "Entrada para menores" || compraEntrada == "entrada para menores"){
            let cantidadEntradaMenores = prompt("Cuantas entradas para menores quiere?");
                stockCompra(stockEntradasMenores, cantidadEntradaMenores, precioMenores)

        }
    }
}

else {
    alert("selecione una opcion correcta");
}

 

switch(true){
    case precioTotal > 1200 && precioTotal < 2500:
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