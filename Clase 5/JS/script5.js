//asi creamos un objeto
let preductoA = { nombre: "silla", precio: 1000, stock: 10}

//asi creamos una funcion para crear objetos
function Producto(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.sumarIva = function (){
        return this.precio * 1.21
    }
}

const productoB = new Producto("Silla", 1000, 10)
const productoC = new Producto("Lampara", 500, 100)
const productoD = new Producto("Lapices", 2000, 85)





//Ejemplo de como usar una funcion para crear productos, en el desafio 3 
// se realizo lo mismo de una manera mas simplificada 
//(utlizando la function Entrada en los IF(es decir solamente el nombre de la entrada) 
// y en la: function stockCompra eligiendo que valor llamamos de esa Entrada, ej: entrada.precio)



// function Entrada (nombre, precio, stock){
//     this.nombre = nombre
//     this.precio = precio
//     this.stock = stock
// }

// const entradaShowMayores = new Entrada("Entrada de mayores", 800, 25)
// const entradaShowMenores = new Entrada("Entrada de menores", 400, 25)

// alert("Bienvenido a la preventa de entradas para el Show del codigo")
// alert("Descuentos\nCon tu compra de $1200 o más, obtenes un 10% de descuento.\n Con tu compra de $2500 o más, obtenes un 20% de descuento");



// function precioFinal (cantidad, precio) {  
// precioTotal += cantidad * precio
// }

// function stockCompra (stock, cantidad, precio){
// precioFinal(cantidad, precio);
// if(stock >= cantidad){
//     alert("Tu compra de " + cantidad + " entradas se realizo con exito");
// }
// else{
//      alert("No tenemos esa cantidad de entradas");
// }
// }



// let compraEntrada = prompt("Eliga el tipo de entrada que quiere comprar:\n -Entrada para mayores \n -Entrada para menores \n -Ambas");

// let precioTotal = 0;
// let ambas = 2;




// if (compraEntrada == "Entrada para mayores" || compraEntrada == "entrada para mayores" ) {
// let cantidadEntradaMayores = prompt("Cuantas entradas para mayores quiere?"); 
//     stockCompra(entradaShowMayores.stock, cantidadEntradaMayores, entradaShowMayores.precio)
// }


// else if(compraEntrada == "Entrada para menores" || compraEntrada == "entrada para menores"){
//     let cantidadEntradaMenores = prompt("Cuantas entradas para menores quiere?");
//         stockCompra(entradaShowMenores.stock, cantidadEntradaMenores, entradaShowMenores.precio)

// }

// else if(compraEntrada == "Ambas" || compraEntrada == "ambas") {
// for(let i = 0; i < ambas; i++){
//     let compraEntrada = prompt("Eliga el tipo de entrada que quiere comprar:\n -Entrada para mayores \n -Entrada para menores")
//     if (compraEntrada == "Entrada para mayores" || compraEntrada == "entrada para mayores" ) {
//         let cantidadEntradaMayores = prompt("Cuantas entradas para mayores quiere?"); 
//             stockCompra(entradaShowMayores.stock, cantidadEntradaMayores, entradaShowMayores.precio)
//     }
//     else if(compraEntrada == "Entrada para menores" || compraEntrada == "entrada para menores"){
//         let cantidadEntradaMenores = prompt("Cuantas entradas para menores quiere?");
//             stockCompra(entradaShowMenores.stock, cantidadEntradaMenores, entradaShowMenores.precio)

// }
// }
// }

// else {
// alert("selecione una opcion correcta");
// }



// switch(true){
// case precioTotal > 1200 && precioTotal < 2500:
//     precioTotal = precioTotal * 0.90
//     alert("recibiste un 10% de descuento por tu compra")
//     alert("el precio final es de " + precioTotal + " pesos")
//     break;
// case precioTotal >= 2500:
//     precioTotal = precioTotal * 0.80
//     alert("recibiste un 20% de descuento por tu compra")
//     alert("el precio final es de " + precioTotal + " pesos")
//     break;
// default:
//     alert("el precio final es de " + precioTotal + " pesos")
//     break;
// }