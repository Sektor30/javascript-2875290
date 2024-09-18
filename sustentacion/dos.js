/* 3 . Crear un array con 4 objetos, cada objeto debe tener nombre, pais, icono. Con 
ayuda del for o del forEach iterar un array de 4 objetos e imprimirlos en una lista 
numerada. Se debe visualizar de la siguiente manera:
1. Carlos - Colombia
2. Pedro - Mexico
3. Maria - Argentina
4. Fernando - Chile */


const country = [
    {nombre:"Carlos", pais:"Colombia", icon:'🪁'},
    {nombre:"Pedro", pais:"Mexico", icon:'🎁'},
    {nombre:"Maria", pais:"Argentina", icon:'⚽'},
    {nombre:"Fernando", pais:"Chile", icon:'🎻'}
    
]

const list = document.getElementById('persona')

country.forEach((element)=> {
    const li = document.createElement('li')

    li.textContent=` ${element.nombre} - ${element.pais} ${element.icon}`
    
    list.appendChild(li)


});

