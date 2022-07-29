//EVENTOS segun lo que haga  el usuario en nuestra pagina, se ejecuta alguna acción
// EVENT HANDLER

let boton = document.getElementById("boton1")


//MANERA 1
// boton.addEventListener("click", clickHandler) 

// function clickHandler(){
//         console.log("Click!!!")
// }



// MANERA 2
// boton.addEventListener("click", () => console.log("Click!!!!!"))
//boton.addEventListener("keydown", () => console.log("Click!!!!!"))

// MANERA 3
// boton.onclick = () => console.log("Click!!!!")

boton.addEventListener ("click", clickHandler)

function clickHandler(){
    let mensaje = document.createElement("h2")
    mensaje.innerText = "Su mensaje ha sido enviado!"

   document.body.append(mensaje)


}