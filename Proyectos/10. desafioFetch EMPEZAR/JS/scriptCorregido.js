document.addEventListener(`DOMContentLoaded`, () =>{

  // function Juego (nombre, precio, stock, id){
  //   this.nombre = nombre
  //   this.precio = precio
  //   this.stock = stock
  //   this.id = id
  // }
  
  // const juego1 = new Juego ("god of war", 3500, 25, 1)
  // const juego2 = new Juego ("cuphead", 750, 30, 2)
  // const juego3 = new Juego ("hollow knight", 1200, 30, 3)
  // const juego4 = new Juego ("gat v", 2000, 30, 4)
  // const juego5 = new Juego ("final fantasy", 450, 30, 5)
  // const juego6 = new Juego ("deep rock galactic", 1250, 30, 6)
  
  // const juegosFisicos = [juego1, juego2, juego3, juego4, juego5, juego6]
  
  const juegosFisico = [
    {
        id: 1,
        nombre: "God of War",
        precio: 3500,
        stock: 10,
        src: "./IMG/godd.jpg"
    },
    {
        id: 2,
        nombre: "Cuphead",
        precio: 750,
        stock: 10,
        src: "./IMG/Cuphead.png"
    },
    {
        id: 3,
        nombre: "Hollow Knight",
        precio: 1200,
        stock: 102,
        src: "./IMG/hollow.jpg"
    },
    {
        id: 4,
        nombre: "GTA V",
        precio: 2000,
        stock: 1,
        src: "./IMG/gta700.jpg"
    },
    {
        id: 5,
        nombre: "Final Fantasy",
        precio: 80,
        stock: 12,
        src: "./IMG/ffc.jpg"
    },
    {
      id: 6,
      nombre: "deep rock galactic",
      precio: 1250,
      stock: 5,
      src: "./IMG/deep500.jpg"
  }
  ]

  // import Swal from 'sweetalert2'
  
  const loadGameCards = () => {
    let girdMain = document.getElementById('main-grid');
    juegosFisico.map((juego) => {
      let gridItem = document.createElement('div');
      gridItem.className = "grid-item";
      let imgItem = document.createElement('img');
      imgItem.className = "img-juego";
      imgItem.src = juego.src;
      gridItem.appendChild(imgItem);
      
      let bodyItem = document.createElement('div');
      bodyItem.className = 'descripcion-juego';
      let titleItem = document.createElement('p');
      titleItem.textContent = juego.nombre + ' - $' + juego.precio;

      let btnContainerItem = document.createElement('div');
      btnContainerItem.className = 'div-button';
      let buttonItem = document.createElement('button');
      buttonItem.className = 'addToCart';
      buttonItem.textContent = 'Agregar al Carrito';
      buttonItem.id = juego.id;
      let inputItem = document.createElement('input');
      inputItem.type = 'number';
      inputItem.placeholder = 'cantidad';
      inputItem.className = 'addToCartCant';
      inputItem.id = juego.id;

      btnContainerItem.appendChild(buttonItem);
      btnContainerItem.appendChild(inputItem);
      bodyItem.appendChild(titleItem);
      bodyItem.appendChild(btnContainerItem);
      gridItem.appendChild(bodyItem);
      girdMain.appendChild(gridItem);

      console.log(buttonItem)
    })

}
    // girdMain.innerHTML += "<div class='grid-item'>";
    // girdMain.innerHTML += "<img src='" + juego.src +"' class='img-juego'>";

    // <div class="grid-item">
    //   <img src="IMG/godd.jpg" alt="" class="img-juego">
    //   <div id="descripcion-juego1"  class="descripcion-juego">
    //     <p>God of War - $500</p>
    //     <div class="div-button">
    //       <input type="number" id="cantidadeDeJuegos" placeholder="Cantidad">
    //       <button class="addToCart" value="god of war">
    //         <p class="p-juego">Agregar al Carrito</p>
    //       </button>
    //     </div>
    //   </div>
    // </div>

    function agregarJuego(itemCarrito){
      Swal.fire({
        icon:"warning",
        text: `queres agregar este juego al carito?`,
        confirmButtonText: `Agregar`,
        denyButtonText: `No Agregar`,
      }).then((result) => {
        if (result.isConfirmed){
          facturaFinal(itemCarrito)
        }
      })
      }



  const loadGameCard = () =>{
    let gridMain = document.getElementById("main-grid")
    juegosFisico.map((juego) => {
      let cardJuego = document.createElement(`div`)
      cardJuego.className = "grid-item"
      cardJuego.innerHTML = 
      `<img src=${juego.src} class="img-juego">
      <div class="descripcion-juego">
        <p>Nombre: ${juego.nombre} <br> Precio: ${juego.precio} <br> Stock: ${juego.stock} </p>
        <div class="div-button">
          <input type="number" placeholder="Cantidad" id=${juego.id} class="addToCartCant">
          <button class="addToCart" id=${juego.id}>Agregar al Carrito</button>
        </div>
      </div>`
      gridMain.appendChild(cardJuego)
      
    })
  }
  
   loadGameCard()
  let total = 0;
  let arrayCarrito = [];
  // loadGameCards();

  const facturaFinal = (itemCarrito) => {
    let h4 = document.getElementById("precioTotal")
    let tableCarrito = document.getElementById("listaCarrito")
    let tr = document.createElement("tr")
    tr.innerHTML = `<td>${juegosFisico[itemCarrito.id - 1].nombre}</td>
                    <td>${juegosFisico[itemCarrito.id - 1].precio}</td>
                    <td>${itemCarrito.cant}</td>
                    <td>${itemCarrito.cant * juegosFisico[itemCarrito.id - 1].precio}</td>`
    
      h4.textContent = "Total: $" + total;
                          tableCarrito.append(tr)
  
  }

  

    if (sessionStorage.getItem("carrito") != null) {
      let arraySession = JSON.parse(sessionStorage.getItem("carrito"));
      // getStorageData(arraySession);
      arraySession.forEach((itemCarrito) => {
        arrayCarrito.push(itemCarrito)
        total += juegosFisico[itemCarrito.id - 1].precio * itemCarrito.cant
        facturaFinal(itemCarrito)
      }) 
      console.log(arraySession);
    }

  
  const addToCart = (button) => {
    var inputsArray = document.getElementsByClassName('addToCartCant');

    let cantidad = 0; 

    Array.prototype.forEach.call(inputsArray, input => {
      
      if(input.id === button.target.id){
        cantidad = parseInt(input.value, 10)
      }
      
      });
      console.log(cantidad)
      


    
    const juegoId = parseInt(button.target.id, 10);

    if (cantidad == 0) {
      alert('No seleccoinaste cantidad');
    } else if( juegosFisico[juegoId - 1].stock < cantidad)  {

      Swal.fire({
        title: 'Error!',
        text: 'No tenemos esa cantidad',
        icon: 'error',
        confirmButtonText: `El stock es de : ${juegosFisico[juegoId - 1].stock} unidades`
      })
      // alert('No tenemos esa cantidad');      
    } else {
      let itemCarrito = { id: juegoId, cant: cantidad};
      arrayCarrito.push(itemCarrito);
      sessionStorage.setItem("carrito", JSON.stringify(arrayCarrito));
      total += juegosFisico[juegoId - 1].precio * cantidad
      agregarJuego(itemCarrito)
    }

   


  }

  const buttonsCards = document.getElementsByClassName('addToCart');
  Array.from(buttonsCards).forEach((button) => {
    button.onclick = addToCart;
  }); 

  const juegosJson = []

  fetch("../data.json")
  .then((response) => response.json())
  .then((data) => console.log(data))

  })



  
  // Crear el json  y usar el fetch









