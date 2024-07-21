const contenedor = document.querySelector('.container');
const boton = document.querySelector('#btn');

let e = 0


function noche() {
    if(e == 0){
     contenedor.style.backgroundColor = '#5a6bff';
     e = 1;
    }
    else{
        contenedor.style.backgroundColor = 'black';
        e = 0;
    }

    console.log("funciona")
}


function movernubes(){
    uno.style.animation="nubeuno 20s infinite reverse ";

    dos.style.animation="nubeuno 10s infinite reverse ";

    tres.style.animation="nubeuno 6s infinite reverse ";

    cuatro.style.animation="nubeuno 6s infinite reverse ";

     console.log('ejecutando mover nube');
}

function moversol(){
    sol.style.animationIterationCount = 'infinite';
    sol.style.animationDuration = '1s';
    sol.style.animationName = 'solAnumation';

   /*  solguia.style.animationIterationCount = 'infinite';
    solguia.style.animationDuration = '9s';
    solguia.style.animationName = 'solAnumation'; */

    contenedor.style.backgroundColor = 'red';
    
    console.log('ejecutando');
}


contenedor.addEventListener('click', noche);
boton.addEventListener('click', noche);



