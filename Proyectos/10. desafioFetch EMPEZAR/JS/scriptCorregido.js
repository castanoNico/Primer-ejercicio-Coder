// const loadJsonJuegos = async () => {
//   const data = await fetch("./data.json")
//   .then((response) =>response.json())
//   .then((data) => return data)

//   console.log(data);

//   return data;
// }
let juegosFisico = [];
let total = 0;
let arrayCarrito = [];

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

const addToCart = (button) => {
  var inputsArray = document.getElementsByClassName('addToCartCant');
  const juegoId = parseInt(button.target.id, 10);
  let cantidad = 0; 

  Array.prototype.forEach.call(inputsArray, input => {
    if (input.id === button.target.id) {
      cantidad = parseInt(input.value, 10)
    }
  });

  if (cantidad == 0){
    alert('No seleccoinaste cantidad');
  } else if(juegosFisico[juegoId - 1].stock < cantidad){
    Swal.fire({
      title: 'Error!',
      text: 'No tenemos esa cantidad',
      icon: 'error',
      confirmButtonText: `El stock es de : ${juegosFisico[juegoId - 1].stock} unidades`
    })
  } else{
    let itemCarrito = {id: juegoId, cant: cantidad};
    arrayCarrito.push(itemCarrito);
    sessionStorage.setItem("carrito", JSON.stringify(arrayCarrito));
    total += juegosFisico[juegoId - 1].precio * cantidad
    agregarJuego(itemCarrito)
    console.log('otra cosa');
  }
}

function agregarJuego(itemCarrito) {
  Swal.fire({
    icon:"warning",
    text: `queres agregar este juego al carito?`,
    confirmButtonText: `Agregar`,
    denyButtonText: `No Agregar`,
  }).then((result) => {
    if (result.isConfirmed) {
      facturaFinal(itemCarrito)
    }
  })
}

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





document.addEventListener(`DOMContentLoaded`, async () =>{

  await fetch("./data.json")
  .then((response) =>response.json())
  .then((data) => {
    juegosFisico = data
    console.log('FetchFlow: ', juegosFisico);
  });
  
  console.log('MainFlow:', juegosFisico);

  loadGameCard()
  
  if (sessionStorage.getItem("carrito") != null) {
    let arraySession = JSON.parse(sessionStorage.getItem("carrito"));
    arraySession.forEach((itemCarrito) => {
      arrayCarrito.push(itemCarrito)
      total += juegosFisico[itemCarrito.id - 1].precio * itemCarrito.cant
      facturaFinal(itemCarrito)
    })
    console.log(arraySession);
  }

  const buttonsCards = document.getElementsByClassName('addToCart');
  Array.from(buttonsCards).forEach((button) => {
    button.onclick = addToCart;
  });
});