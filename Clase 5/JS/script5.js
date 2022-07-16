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