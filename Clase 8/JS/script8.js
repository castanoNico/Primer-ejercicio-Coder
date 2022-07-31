/* Tipos de NODOS: 
        *Document
        *Element
        *Text

   METODOS para acceder a los elementos de DOM:

   getElementById()
   getElementsByClassName()
   getElementsByTagName()
  
    MODIFICAR NODOS:

    innerText: accede o midifica el contenido textual de algun elemento del DOM
    innerHTML: se puede modificar el HTML que tiene como HIJO ese nodo
    className: modifica la clase de los nodos

    AGREGAR O QUITAR NODOS:
    document.createElement() : con esta funcion creamos una etiqueta HTML.Luegom debe agregarse con un append(), al nodo que querramos agregarlo
    document.remove()
*/

// let titulo = document.getElementById("titulo")

// console.log(titulo)



// let country = document.getElementsByClassName("paises")
// //convierte a todos los elementos de la class paises en un array

// console.log(country)


// let paises = document.getElementsByTagName("li")

// console.log(paises)




// innerText

 //country[1].innerText = "UY" 

//console.log(country[1].innerText)


// titulo.innerText = "Hola Chau" // hace referencia al "titulo" - "Hola Mundo"





//innerHTML

// let nuevoSubtitulo = document.getElementById("subtitulo")

//  subtitulo.innerHTML = "<h6>Hello fucking World <p>innerHTML</p> </h6>"





//  let nuevoPais = document.createElement("li")

//  nuevoPais.innerText = "MX"

//  let lista = document.getElementById("lista")


//  lista.append(nuevoPais) 

//como usarlo con document.getElementsByClassName y con document.getElementsByTagName

// ????
let nuevoPais = document.createElement("li")

nuevoPais.innerText = "MX"


 let lista = document.querySelectorAll(".lista");

console.log(lista)

lista.append(nuevoPais)






