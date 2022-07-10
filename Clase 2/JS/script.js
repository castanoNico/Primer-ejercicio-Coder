// let nombreProductoA = "mesa" //si no esta nombreProductoA funciona igual
// let precioProductoA = 1000      
// let stockProductoA = 10 

// let nombreProductoB = "silla"
// let precioProductoB = 500
// let stockProductoB = 100

// let compra1 = prompt("Ingrese nombre del producto que quiere comprar: \n- mesa\n- silla")
// let cantidad1 = prompt("ingrese la cantidad del producto que quiere comprar: ")

// if (compra1 == "mesa") {
//     if (stockProductoA >= cantidad1){
//         alert("el precio es de: $ " + (cantidad1 * precioProductoA))
//     }
//     else{
//         alert("No disponemos de esa cantidad en stock. Nuestro stock actual es de:" + stockProductoA)
//     }
// }
// else if (compra1 == "Silla"){
//     if (stockProductoB >= cantidad1){
//         alert("el precio es de: $ " + (cantidad1 * precioProductoB))
//     }
//     else{
//         alert("No disponemos de esa cantidad en stock. Nuestro stock actual es de:" + stockProductoA)
//     }
// }
// else{
//     alert("no tenemos ese producto")
// }



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
             alert("El precio es de: " +  (precioMayores * cantidadEntradaMayores));
}
        else{
             alert("No tenemos esa cantidad de entradas");
}

}
else if(compraEntrada == "Entrada para menores" || compraEntrada == "entrada para menores"){
        let cantidadEntradaMenores = prompt("Cuantas entradas para menores quiere?");
    if( stockEntradasMenores > cantidadEntradaMenores){
        alert("El precio es de: " + (precioMenores * cantidadEntradaMenores));
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

