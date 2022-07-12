// let edad = parseInt(prompt("Ingrese su edad:"))

// if(edad >= 18) {
//     alert("sos Mayor")
// }
// else{
//     alert("no sos mayor")
// }


let precio = parseInt(prompt("Ingrese el precio:"))

if(precio < 20) {
    alert("el precio es menor que 20")
}
else if(precio < 50) {
    alert("el precio es menor que 50")
}
else if(precio < 100) {
    alert("el precio es menor que 100")
}

else{
    alert("el precio es mayor que 100")
}




// OTRA MANERA DE HACERLO ES CON Switch
// queda un codigo mas limpio
// let precio = parseInt(prompt("Ingrese el precio:"))

// switch(true){
//     case precio < 20:
//         alert("El precio es menor que 20");
//         break;
//     case precio < 50:
//         alert("El precio es menor que 50");
//         break;
//     case precio < 100:
//         alert("El precio es menor que 100");
//         break;
//     case precio > 100:
//         alert("El precio es mayor que 100");
//         break;
//     default:
//         console.log(precio)
//         alert("No ingresaste un precio en numeros");
//     break;
// }

