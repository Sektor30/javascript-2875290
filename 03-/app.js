const listcolor = document.querySelector('#listaColores');
const btncrear = document.querySelector('#btncrear');
const main = document.querySelector('#main');
const btnBorrar = document.querySelector('#btnBorrar');
let n = 1;



function crear(){
    const ball = document.createElement('div');
    ball.innerText = "";
    ball.classList.add('pelotica');
    ball.style.backgroundColor = listcolor.value;
    ball.innerText = n++;

    main.appendChild(ball);

    console.log(ball)

}


function borrarpantalla(){
  main.innerHTML='';
  n=0;
}

function borrarElement(e){
    console.log('le di click a la pelotica' +' '+ e.target.innerText)
    main.removeChild(main.removeChild())
}

btncrear.addEventListener('click', crear)
btnBorrar.addEventListener('click', borrarpantalla)
main.addEventListener('click',borrarElement)