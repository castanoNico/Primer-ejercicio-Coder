document.addEventListener(`DOMContentLoaded`, () =>{

    function Juego (nombre, precio, stock, id){
      this.nombre = nombre
      this.precio = precio
      this.stock = stock
      this.id = id
    }
    
    const juego1 = new Juego ("god of war", 3500, 25, 1)
    const juego2 = new Juego ("cuphead", 750, 30, 2)
    const juego3 = new Juego ("hollow knight", 1200, 30, 3)
    const juego4 = new Juego ("gat v", 2000, 30, 4)
    const juego5 = new Juego ("final fantasy", 450, 30, 5)
    const juego6 = new Juego ("deep rock galactic", 1250, 30, 6)
    
    const juegosFisicos = [juego1, juego2, juego3, juego4, juego5, juego6]
    
    const juegosFisico = [
      {
          id: 1,
          nombre: "god of war",
          precio: 3500,
          stock: 10
      },
      {
          id: 2,
          nombre: "cuphead",
          precio: 750,
          stock: 10
      },
      {
          id: 3,
          nombre: "hollow knight",
          precio: 1200,
          stock: 102,
      },
      {
          id: 4,
          nombre: "gat v",
          precio: 2000,
          stock: 1
      },
      {
          id: 5,
          nombre: "final fantasy",
          precio: 80,
          stock: 12
      },
      {
        id: 6,
        nombre: "deep rock galactic",
        precio: 1250,
        stock: 1
    }
    ]
    
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

          card.innerHTML =   
                            `<h3>${juego.nombre}</h3>
                            <p> $ ${juego.precio}</p>
                            <p>Stock ${juego.stock}</p>
                            `;
                      
                descripcionJuego.append(card)
                console.log(card)
          }
    tarjetaDeJuego ( juego1, descripcionJuego[0])
    tarjetaDeJuego ( juego2, descripcionJuego[1])
    tarjetaDeJuego ( juego3, descripcionJuego[2])
    tarjetaDeJuego ( juego4, descripcionJuego[3])
    tarjetaDeJuego ( juego5, descripcionJuego[4])
    tarjetaDeJuego ( juego6, descripcionJuego[5])
    
  


    // var elemento = document.getElementsByClassName("images");
    // for(var i = 0; i < elemento.length; i++)
    //     elemento[i].className += " col-md-6";
    
    
    // let cantidadJuego = 0;
    
    let precioTotal = 0;
    
    function precioFinal (cantidad, precio) {
    precioTotal += cantidad * precio
    
    }
    
    function stockCompra(cantidadDeJuegos, juego) {
    
    precioFinal (cantidadDeJuegos, juego.precio);
    if (juego.stock >= cantidadDeJuegos){
      let botonCompra = document.getElementById("botonCompra")
      botonCompra.addEventListener("click", facturaFinal)
      
      let factura = document.getElementById("facturaDeCompra")
      console.log(botonCompra)
      
      function facturaFinal() {
        
        factura.innerHTML = " "
        let divFactura = document.createElement("div")
        divFactura.innerHTML = `<h4> Compraste ${juego.nombre}</h4>
                                <h4>El precio final es de ${precioTotal}</h4>`
                              factura.append(divFactura)
      
      }
    
    
    } 
    else{
      let botonCompra = document.getElementById("botonCompra")
      botonCompra.addEventListener("click", facturaFinal)
      console.log(botonCompra)
      let factura = document.getElementById("facturaDeCompra")
      
      
      function facturaFinal() {
        
        factura.innerHTML = " "
        let divFactura = document.createElement("div")
        divFactura.innerHTML = `<h4> No tenemos esa cantidad de Stock</h4>`
                                
                              factura.append(divFactura)
      
      }
    
    }
    
    }
    
    let input = document.getElementById("cantidadeDeJuegos")
    input.addEventListener ("change", inputHandler)
    
    let cantidadDeJuegos = 0;
    
    function inputHandler(e) {
    cantidadDeJuegos = e.target.value
    
    //compra()
    }
    
    
    
    
    // function compra(){
    
      let comprarJuego
      let listaDesplegable = document.getElementById("listaDesplegable")
      listaDesplegable.addEventListener("change", respuestaClick)
    
    
      function respuestaClick(e){  comprarJuego = e.target.value 
        console.log(comprarJuego)
    
        
        if (comprarJuego == "god of war"){
        stockCompra(cantidadDeJuegos, juego1)
        }
    
        else if (comprarJuego == "cuphead"){
        stockCompra(cantidadDeJuegos, juego2)
        }
    
        else if (comprarJuego == "hollow knight"){
        stockCompra(cantidadDeJuegos, juego3)
        }
    
        else if (comprarJuego == "gta v"){
        stockCompra(cantidadDeJuegos, juego4)
        }
    
        else if (comprarJuego == "final fantasy"){
        stockCompra(cantidadDeJuegos, juego5)
        }
    
        else if (comprarJuego == "deep rock galactic"){
        stockCompra(cantidadDeJuegos, juego6)
        }
        else {
          alert("Seleccione una opcion correcta")
          }
      
    
    
    
    
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
    
    
    }

    // function mostrarCarrito(){

       //vaciamos el HTML

    //   quitamos los duplicados
    //   const carritoSinDuplicados = [...new Set(carritos)]

    //   carritoSinDuplicados.forEach((juego) =>{

    //   })

    // }
    
    
    let carritos = []
    const guardarLocal = (clave, valor) => ( sessionStorage.setItem(clave, valor)) ;
    
    let botonGuarda = document.getElementsByClassName("botonGuardar")
    botonGuarda[0].addEventListener("click", guardarJuego)
    botonGuarda[1].addEventListener("click", guardarJuego)
    botonGuarda[2].addEventListener("click", guardarJuego)
    botonGuarda[3].addEventListener("click", guardarJuego)
    botonGuarda[4].addEventListener("click", guardarJuego)
    botonGuarda[5].addEventListener("click", guardarJuego)
    
    function guardarJuego(e){

      carrito = e.target.value
      if (carrito == "god of war"){
        carritos.push(juego1)
        guardarLocal(carrito, JSON.stringify(juego1))   
      
    }
    
     else if (carrito == "cuphead"){
      carritos.push(juego2)
      guardarLocal(carrito, JSON.stringify(juego2))
      
    }
    
    else if (carrito == "hollow knight"){
      carritos.push(juego3)
      guardarLocal(carrito, JSON.stringify(juego3))
      
    
    }  
    
    else if (carrito == "gta v"){
      carritos.push(juego4)
      guardarLocal(carrito, JSON.stringify(juego4))
      
    
    }
    
    
    else if (carrito == "final fantasy"){
      carritos.push(juego5)
      guardarLocal(carrito, JSON.stringify(juego5))
      
    
    }
    
    else if (carrito == "deep rock galactic"){
      carritos.push(juego6)
      guardarLocal(carrito, JSON.stringify(juego6))
      
    }
    
    let listaJuegos = sessionStorage.getItem(carrito)
    console.log(listaJuegos)
    console.log(carritos)
    
    }
    

    let botonCarrito = document.getElementById("botonCarrito")
    botonCarrito = addEventListener("click", tarjetaDeCarrito)



    let cardCarrito = document.getElementById("divCarrito")
    function tarjetaDeCarrito(){
      cardCarrito.innerHTML = ""
      for (let i = 0; i < sessionStorage.length; i++){
        let clave = sessionStorage.key(i);

      let card1 = document.createElement("div")
      


      card1.innerHTML =  
                        `<h5>${localStorage.getItem(clave)}</h5>

                        `;
                  
            cardCarrito.append(card1)

      }
    }
    })



  