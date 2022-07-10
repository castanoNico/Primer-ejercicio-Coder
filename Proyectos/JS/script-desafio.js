let entradaShowMayores = "Entrada para Mayores";
let precioMayores = 800;
let stockEntradasMayores = 25;

let entradaShowMenores = "Entrada para Menores";
let precioMenores = 400;
let stockEntradasMenores = 25;

alert("Bienvenido a la preventa de entradas para el Show del codigo")
let compraEntrada = prompt("Eliga el tipo de entrada que quiere comprar:\n -Entrada para mayores \n -Entrada para menores \n -Ambas");

let precioTotal = 0;
let ambas = 2

if (compraEntrada == "Entrada para mayores" || compraEntrada == "entrada para mayores" ) {
    let cantidadEntradaMayores = prompt("Cuantas entradas para mayores quiere?"); 
        if(stockEntradasMayores > cantidadEntradaMayores ){
             alert("El precio es de: " +  (precioMayores * cantidadEntradaMayores) + " pesos");
}
        else{
             alert("No tenemos esa cantidad de entradas");
}

}
else if(compraEntrada == "Entrada para menores" || compraEntrada == "entrada para menores"){
        let cantidadEntradaMenores = prompt("Cuantas entradas para menores quiere?");
    if( stockEntradasMenores > cantidadEntradaMenores){
        alert("El precio es de: " + (precioMenores * cantidadEntradaMenores) + " pesos");
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
                     alert("Usted compro: " +  cantidadEntradaMayores + " entradas");
                     precioTotal += precioMayores * cantidadEntradaMayores;
        }
                else{
                     alert("No tenemos esa cantidad de entradas.");
        }
        
        }
        else if(compraEntrada == "Entrada para menores" || compraEntrada == "entrada para menores"){
            let cantidadEntradaMenores = prompt("Cuantas entradas para menores quiere?");
            if (stockEntradasMenores >= cantidadEntradaMenores)
            alert("Usted compro " + cantidadEntradaMenores + " entradas");
            precioTotal += precioMenores * cantidadEntradaMenores;
        }

        else {
            alert("No tenemos esa cantidad de entradas.");
        }

    }
    alert("El precio total es de " + precioTotal + " pesos.");
}
else{
    alert("selecione una opcion correcta");
}