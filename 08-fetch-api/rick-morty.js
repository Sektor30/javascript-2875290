
console.log('thatsAll')

const container = document.querySelector('.container')


let url = "https://rickandmortyapi.com/api/character"

fetch(url)
.then(response => response.json())
.then(data => {

    data.results.forEach(element => {
        const box = document.createElement('div')
        box.classList.add("box")

        box.innerHTML = `<img src="${element.image}" width="200px"
        <p> ${element.name} </p>
        `
        console.log(element.image)
        container.appendChild(box)        


    });



} )


/* imprimir imagen y parrafo dentro del box */