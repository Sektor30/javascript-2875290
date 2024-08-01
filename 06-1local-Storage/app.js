//registrar el dato de "user" en local storage

const formulario = document.querySelector('.formulario')
const ingresoUsuario = document.querySelector('#nombre')
const clave = document.querySelector('#clave')
const submit = document.querySelector('#submit') 



/* let userName='admin'
let pass = 1234 */


/* se envia informacion registro-js */
 let user ={
    userName: 'sergio',
    userPass: '1234',
}
localStorage.setItem('user',JSON.stringify(user)) 


// inicio de sesion

function validarUsuario(e) {
    e.preventDefault();
   
    let currentUser = JSON.parse (localStorage.getItem('user'))
    console.log(currentUser.userName)
    console.log(currentUser.userPass)

    console.log(Boolean(ingresoUsuario.value ===  user.userName));
    console.log(Boolean(clave.value ===  user.userPass));

    if(ingresoUsuario.value === currentUser.userName && clave.value === currentUser.userPass){
        console.log('feliciadades puedes entrar 👍')
        window.location ="./userpage.html"
    }
    else{
        console.log('sigue intentando')

    }

    formulario.reset()


}

formulario.addEventListener('submit', validarUsuario)