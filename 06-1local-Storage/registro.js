const formulario = document.querySelector('.formulario')
const ingresoUsuario = document.querySelector('#nombre')
const clave = document.querySelector('#clave')
const submit = document.querySelector('#submit')


function registrarUser(e) {
    e.preventDefault();

    let user = {
        userName: ingresoUsuario.value,
        userPass: clave.value
    }


    localStorage.setItem('user', JSON.stringify(user))
    formulario.reset()
}


formulario.addEventListener('submit', registrarUser)


