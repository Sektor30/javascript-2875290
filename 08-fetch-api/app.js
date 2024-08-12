

const container = document.querySelector('.container')


fetch('https://jsonplaceholder.typicode.com/users')
  .then(respuesta => respuesta.json())
  .then(datos => {
    datos.forEach(element => {
        //Name:
        //username

        /* console.log(element.name) */
        /* console.log( `el nombre es "${element.name}" y el usuario es ${element.username}`) */

        const box = document.createElement('div')
            box.classList.add('box');   

        const titulo = document.createElement('h1')  
        titulo.textContent= element.name;
        /* titulo.classList.add ('titulo') */ 
        box.appendChild(h1);

        const parrafo = document.createElement('p')
        parrafo.textContent = element.username;
        /* parrafo.classList.add('parrafo')   */ 
        box.appendChild(p);
       
       
        container.appendChild(box)
       
    });
  })

