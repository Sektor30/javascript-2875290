console.log('ejecutando')


const saludo = document.querySelector('#saludo');
const container = document.querySelector('.contenedor')


let nombreUser = JSON.parse( localStorage.getItem('user') );

saludo.innerHTML = `Hola ${nombreUser.userName} 🎦`
