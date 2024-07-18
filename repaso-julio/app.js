const entrada = document.getElementById('envio'); 
const boton = document.getElementById('btn');
const pelota = document.getElementById('circulo'); 



boton.addEventListener('click', function() {
    circulo.style.marginLeft = circulo.style.marginLeft === '300px' ? '0px' : '300px';
    circulo.style.transitionDuration = '.10s';
    circulo.style.backgroundColor = entrada.value ;

    
});