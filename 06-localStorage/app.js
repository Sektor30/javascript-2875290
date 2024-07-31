
let nombre ="josé"
let items = ['uno','dos','tres','cuatro','cinco','seis' ]
let pelicula = {
    id:3,
    nombre: "Zootopia",
    year: 2016,
    director: "Byron Howard, Rich Moore",
    guionista: ["Jared Bush", "Phil Johnston"],
    genero: ["Aventura", "Comedia"],
direccion:" https://www.imdb.com/title/tt2948356/ ",
imagen:"https://m.media-amazon.com/images/I/71hWkxTBHRL.jpg "

}
//LLAMADO DE STORAGE EN APPLICATION
/* function agregarStorage(){
    localStorage.setItem('name', nombre)
} */


    //VALORES DE ITEMS 
    /* function agregarStorage(key,value){
        localStorage.setItem(key, value)

    }
    agregarStorage('nombre', nombre)
    agregarStorage('carrito', items)
    agregarStorage('pelicula', pelicula) */



    function agregarStorage(key,value){
        if(typeof value == 'string'){
            localStorage.setItem(key,value)   
        }else{
            localStorage.setItem(key,JSON.stringify(value))
        }

    }

    //MOSTRAR ELEMENTOS
     agregarStorage('nombre', nombre)
    agregarStorage('carrito', items)
    agregarStorage('pelicula', pelicula) 

    //ejercicio
    /* let resultado = localStorage.getItem('nombre') */
    /* let resultado = JSON.parse (localStorage.getItem('carrito')); */
    // console.log(resultado, typeof resultado)

    function obtenerDatos(){
        let nombreUsuario = localStorage.getItem('nombre');
        let carritoUsuario = JSON.parse (localStorage.getItem('carrito'));
        let peliculaUsuario = JSON.parse(localStorage.getItem('pelicula'));

        console.log(carritoUsuario, typeof carritoUsuario)

        carritoUsuario.forEach(item => {
            console.log(item)

        });
    }

    
    obtenerDatos()

    function borrarItem (item){
        localStorage.removeItem(item)
    }

    //borrar ITEM UNO A UNO
   /*  borrarItem('pelicula')
    borrarItem('carrito')
    borrarItem('nombre')
    borrarItem('name') */
    

    // BORRAR TODOS LOS ITEMS
    function borrarTodo (){
        localStorage.clear()
    }

    borrarTodo ()