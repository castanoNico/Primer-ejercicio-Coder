function Juego (nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

const juego1 = new Juego ("God of war", 3500, 25)
const juego2 = new Juego ("Cuphead", 750, 30)
const juego3 = new Juego ("Hollow Knight", 1200, 30)
const juego4 = new Juego ("GTA V", 2000, 30)
const juego5 = new Juego ("Final Fantasy", 450, 30)
const juego6 = new Juego ("Deep Rock Galactic", 1250, 30)

let juegosFisicos = [juego1, juego2, juego3, juego4, juego5, juego6]



//  for (const juego of juegosFisicos[1]){
//         let card = document.createElement("div")
//         card.innerHTML = `<h3>${juego.nombre}</h3>`
//         document.body.append(card)
//  }

   
   
    let card = document.createElement ("div")
    card.innerHTML = `<h3>${juegosFisicos[0].nombre}</h3>`

    let nombre = document.getElementById("descripcion-juego")
    nombre.append(card)