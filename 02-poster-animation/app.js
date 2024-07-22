const contenedor = document.querySelector('.container');
const boton = document.querySelector('#btn');
const naveUno = document.querySelector('.una');
const jefe = document.querySelector('.chief');

let e = 0


function noche() {
    if(e == 0){
     contenedor.style.backgroundColor = '#5a6bff';
     naveUno.style.animation="movernaveuna 10s reverse infinite";
     naveUno.style.transform="rotateY(180deg)";
     jefe.style.animation= 'blured 10s ';

     e = 1;
    }
    else{
        contenedor.style.backgroundColor = 'black';
        naveUno.style.animation="movernaveuna 5s infinite";
        naveUno.style.transform="rotateY(360deg)";
        jefe.style.animation= 'blured 3s ease-in-out';
        
        e = 0;
    }

}


function movernubes(){    

    naveUno.style.animation="nubeuno 20s infinite reverse ";

    dos.style.animation=" 10s infinite reverse ";

    tres.style.animation=" 6s infinite reverse ";

    cuatro.style.animation=" 6s infinite reverse ";

     console.log('ejecutando mover nube');
}




function movernave(){
    sol.style.animationIterationCount = 'infinite';
    sol.style.animationDuration = '1s';
    sol.style.animationName = 'solAnumation';

   /*  solguia.style.animationIterationCount = 'infinite';
    solguia.style.animationDuration = '9s';
    solguia.style.animationName = 'solAnumation'; */

    
    
    console.log('ejecutando');
}


contenedor.addEventListener('click', noche);
boton.addEventListener('click', noche);



