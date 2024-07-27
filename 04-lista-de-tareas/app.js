const input = document.querySelector("input");
const main = document.querySelector('#main');
const btncrear = document.querySelector('#btncrear');
const btnBorrar = document.querySelector('h1');
const ul =  document.querySelector("ul");

let n = 1;


btncrear.addEventListener('click', (e) => {
  e.preventDefault(); 
    const text = input.value;

  const li = document.createElement('li')
  const p = document.createElement('p') 
 /*  const equis =  document.createElement('h1') */

  p.textContent = text;

  /*  equis.innerText = 'X';
  equis.classList.add('button'); */


  li.appendChild(p);
  li.appendChild(addDeleteBtn());
 /*  li.appendChild(equis) */
  ul.appendChild(li); 

  input.value = "";

});


function addDeleteBtn() {
  const deleteBtn = document.createElement('button');

  deleteBtn.textContent = "X";
  deleteBtn.className= "btn-delete";

  deleteBtn.addEventListener('click',(e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

  });
   return deleteBtn;
  
}






/* function borrarpantalla(){
  main.innerHTML='';
  n=0;
}
*/

/* function borrarElement(e){ */
  /* console.log('le di click a la pelotica' +' '+ e.target.innerText)
  main.removeChild(e.target) */
/* 
  if(e.target.innerHTML=='X'){
    li.removeChild(e.target.parentElement) 
    console.log('borrar equis')
  }
 
} */ 
/* 
btnBorrar.addEventListener('click', borrarpantalla)
main.addEventListener('click', borrarElement)
 */








    