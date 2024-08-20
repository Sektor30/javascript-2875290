
const container = document.querySelector('.contenedor')

const buscador = document.querySelector("#buscador")
const textoBusqueda = document.querySelector("#textoBusqueda")
const listaStatus = document.querySelector("#listaStatus")







function mostrarResults(peliculasAnimacion){
  peliculasAnimacion.forEach(element => {
    let box = document.createElement('div');
    box.classList.add("box")

  box.innerHTML=` 
  <div class="slide-container">
  
  <div class="wrapper">
    <div class="clash-card ">
      <div class="clash-card__image clash-card__image--barbarian">
         <img src="${element.imagen}" url alt="" width="50%"/> 
      </div>
      <div class="clash-card__level">card</div>
      <div class="clash-card__unit-name">PELÍCULAS</div>
      <div class="clash-card__unit-description">
       <ul>

        <li class= "nombre"> ${element.nombre} </li>
        <li class="year">${element.year} </li>
        <li>${element.director} </li>
        <li>${element.guionista} </li>
        <li>${element.genero[0]} </li>
        <li> ${element.direccion} </a></li>
       </ul>
      </div>

      </div>
          
  `
  container.appendChild(box)
})
}



function filtrar(e) {

  e.preventDefault()
  container.innerHTML = ""
  let filtro = peliculasAnimacion
  

  if(listaStatus.value != "all"){
    filtro = filtro.filter( pelicula => pelicula.genero.toString().toLowerCase().includes(listaStatus.value.toLowerCase())).filter(pelicula =>  pelicula.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );

  console.log(peliculasAnimacion[1].genero.toString())

  mostrarResults(filtro)

  }

  else{

    if(textoBusqueda.value){
      filtro = filtro.filter(pelicula => pelicula.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );

      mostrarResults(filtro)

    }

    else{
      mostrarResults(filtro)
    }

    textoBusqueda.value= ""
    
  }

}

buscador.addEventListener('submit',filtrar)
