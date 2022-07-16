// let entradaShowMayores = "Entrada para Mayores";
let precioMayores = 800;
let stockEntradasMayores = 25;

// let entradaShowMenores = "Entrada para Menores";
let precioMenores = 400;
let stockEntradasMenores = 25;

alert("Bienvenido a la preventa de entradas para el Show del codigo")
//alert("Nuestros decuentos\n Compra de $1200 o más: 10% de descuento \n Compra de $2500 o más 20% de descuento");
alert("Con tu compra de $2500 o más, obtenes un 20% de descuento");

let compraEntrada = prompt("Eliga el tipo de entrada que quiere comprar:\n -Entrada para mayores \n -Entrada para menores \n -Ambas");

let precioTotal = 0;
let ambas = 2;

if (compraEntrada == "Entrada para mayores" || compraEntrada == "entrada para mayores" ) {
    let cantidadEntradaMayores = prompt("Cuantas entradas para mayores quiere?"); 
    precioTotal =+ cantidadEntradaMayores * precioMayores;
        if(stockEntradasMayores > cantidadEntradaMayores ){
            alert("Tu compra de " + cantidadEntradaMayores + " entradas se realizo con exito")
           // alert("El precio es de: " +  (precioMayores * cantidadEntradaMayores) + " pesos");
}
        else{
             alert("No tenemos esa cantidad de entradas");
}

}
else if(compraEntrada == "Entrada para menores" || compraEntrada == "entrada para menores"){
        let cantidadEntradaMenores = prompt("Cuantas entradas para menores quiere?");
        precioTotal =+ cantidadEntradaMenores * precioMenores
    if( stockEntradasMenores > cantidadEntradaMenores){
        alert("Tu compra de " + cantidadEntradaMenores + " entradas se realizo con exito")
        //alert("El precio es de: " + (precioMenores * cantidadEntradaMenores) + " pesos");
    }
    else{
        alert("no tenemos esa cantidad de entradas.");
    }

}

else if(compraEntrada == "Ambas" || compraEntrada == "ambas") {
    for(let i = 0; i < ambas; i++){
        let compraEntrada = prompt("Eliga el tipo de entrada que quiere comprar:\n -Entrada para mayores \n -Entrada para menores")
        if (compraEntrada == "Entrada para mayores" || compraEntrada == "entrada para mayores" ){
            let cantidadEntradaMayores = prompt("Cuantas entradas para mayores quiere?"); 
                if(stockEntradasMayores >= cantidadEntradaMayores ){
                    alert("Tu compra de " + cantidadEntradaMayores + " entradas se realizo con exito")
                     //alert("Usted compro: " +  cantidadEntradaMayores + " entradas para mayores");
                     precioTotal += precioMayores * cantidadEntradaMayores;
        }
                else{
                     alert("No tenemos esa cantidad de entradas.");
        }
        
        }
        else if(compraEntrada == "Entrada para menores" || compraEntrada == "entrada para menores"){
            let cantidadEntradaMenores = prompt("Cuantas entradas para menores quiere?");
            if (stockEntradasMenores >= cantidadEntradaMenores)
            alert("Tu compra de " + cantidadEntradaMenores + " entradas se realizo con exito")
           // alert("Usted compro " + cantidadEntradaMenores + " entradas para menores");
            precioTotal += precioMenores * cantidadEntradaMenores;
        }

        else {
            alert("No tenemos esa cantidad de entradas.");
        }

    }
    

}
else{
    alert("selecione una opcion correcta");
}

switch(true){
    // case precioTotal >= 1200:
    //     precioTotal = precioTotal * 0.90
    //     alert("recibiste un 10% de descuento por tu compra")
    //     alert("el precio final es de " + precioTotal + " pesos")
    //     break;
    case precioTotal >= 2500:
        precioTotal = precioTotal * 0.80
        alert("recibiste un 20% de descuento por tu compra")
        alert("el precio final es de " + precioTotal + " pesos")
        break;
    default:
        alert("el precio final es de " + precioTotal + " pesos")
        break;
}







