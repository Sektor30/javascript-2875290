
const saludo = document.querySelector('#saludo');
const container = document.querySelector('.contenedor')


let nombreUser = JSON.parse( localStorage.getItem('user') );

saludo.innerHTML = `Hola ${nombreUser.userName} 🎦`



peliculasAnimacion.forEach(element => {
    let card = document.createElement('div');

  card.innerHTML=` 
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
  container.appendChild(card)
})
