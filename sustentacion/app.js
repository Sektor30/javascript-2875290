/*5 Crear un array con 4 objetos, cada objeto debe tener: titulo, descripción, imagen. 
Luego imprimir los 4 objetos en pantalla (estilo card) utilizando createElement y for o 
forEach */

let libros = [
        {titulo:"la divina comedia", descripcion:"clasico de ficcion", imagen:"", },
        {titulo:"el quijote de la mancha", descripcion:"clasico de ficcion", imagen:"", },
        {titulo:"la biblia", descripcion:"libro religioso", imagen:"", },
        {titulo:"rayuela", descripcion:"literatura latinoamericana", imagen:"", }

]


const contenedor = document.getElementById('contenedor')

libros.forEach((element)=>{
    const card = document.createElement('div')
     card.classList.add('card')  
  /*   div.appendChild('h1')  */

    
    card.innerHTML= ` 
            <img src="${element.imagen}" alt="">
            <h1>${element.titulo}</h1>
            <p>${element.descripcion}}</p>

    `

    contenedor.appendChild(card)

})




