const main = document.querySelector('#main');
const btncrear = document.querySelector('#btncrear');
const input = document.querySelector('input');



btncrear.addEventListener('click', (e)=>{
  e.preventDefault(); 
    const text = input.value.trim();

    console.log(text)

  const li =document.createElement('li')
  const p =document.createElement('p') 

  p.textContent = text;

  li.appendChild(p);
  ul.appendChild(li); 

});










function crear(){
    /* const marco = document.createElement('div');
    const equis = document.createElement('h1');



    equis.innerText = 'x';
    equis.classList.add('equis') */



  }

    