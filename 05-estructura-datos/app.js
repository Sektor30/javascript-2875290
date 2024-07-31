
const container = document.querySelector('.contenedor')


/* peliculasAnimacion.forEach(element => { */
  /* teclas alt ctl } */
  /* let card = document.createElement('div');
 

 card.innerHTML= `
      <img src="${element.imagen}" 
      alt="" width="10%">
      <h1>${element.nombre}</h1>
      <p>${element.género[0]}</>
      <p>${element.year}Año película</p>
 `
    
   container.appendChild(card); 

});
 */


peliculasAnimacion.forEach(element => {
    let card = document.createElement('div');

  card.innerHTML=` 
  <div class="slide-container">
  
  <div class="wrapper">
    <div class="clash-card ">
      <div class="clash-card__image clash-card__image--barbarian">
         <img src="${element.imagen}" url alt="" width="50%"/> 
      </div>
      <div class="clash-card__level">card</div>
      <div class="clash-card__unit-name">PELÍCULAS</div>
      <div class="clash-card__unit-description">
       <ul>

        <li class= "nombre"> ${element.nombre} </li>
        <li class="year">${element.year} </li>
        <li>${element.director} </li>
        <li>${element.guionista} </li>
        <li>${element.genero[0]} </li>
        <li> ${element.direccion} </a></li>
       </ul>
      </div>

      </div>
          
  `
  container.appendChild(card)
})




































/* EJEMPLO DE MODELO BD*/

/*
let peliculasAnimacion = ['uno', 'dos','tres']
let peliculasAnimacion = [
    {   
        id:1,
        nombre: '',
        year: 1985,
        direccionPelicula: [],
        genero: [sci-fi];
        image:;
            
    },
    {   
        id:1,
        nombre: ,
        year: ,
        direccionPelicula: [''],
        genero: ;
        image:;
            
    },

] */

    
    /*

```json
[
  {
    nombre: "Toy Story",
    año: 1995,
    director: "John Lasseter",
    guionista: "Joss Whedon, Andrew Stanton, Joel Cohen, Alec Sokolow",
    género: "Aventura, Comedia"
  },
  {
    nombre: "El Rey León",
    año: 1994,
    director: "Roger Allers, Rob Minkoff",
    guionista: "Irene Mecchi, Jonathan Roberts, Linda Woolverton",
    género: "Aventura, Drama"
  },
  {
    nombre: "Shrek",
    año: 2001,
    director: "Andrew Adamson, Vicky Jenson",
    guionista: "Ted Elliott, Terry Rossio, Joe Stillman, Roger S.H. Schulman",
    género: "Aventura, Comedia"
  },
  {
    nombre: "Finding Nemo",
    año: 2003,
    director: "Andrew Stanton, Lee Unkrich",
    guionista: "Andrew Stanton, Bob Peterson, David Reynolds",
    género: "Aventura, Comedia"
  },
  {
    nombre: "Spirited Away",
    año: 2001,
    director: "Hayao Miyazaki",
    guionista: "Hayao Miyazaki",
    género: "Fantasía, Aventura"
  },
  {
    nombre: "The Incredibles",
    año: 2004,
    director: "Brad Bird",
    guionista: "Brad Bird",
    género: "Acción, Aventura"
  },
  {
    nombre: "WALL-E",
    año: 2008,
    director: "Andrew Stanton",
    guionista: "Andrew Stanton, Jim Reardon",
    género: "Ciencia Ficción, Aventura"
  },
  {
    nombre: "Coco",
    año: 2017,
    director: "Lee Unkrich, Adrian Molina",
    guionista: "Adrian Molina, Matthew Aldrich",
    género: "Fantasía, Musical"
  },
  {
    nombre: "Zootopia",
    año: 2016,
    director: "Byron Howard, Rich Moore",
    guionista: "Jared Bush, Phil Johnston",
    género: "Aventura, Comedia"
  },
  {
    nombre: "Up",
    año: 2009,
    director: "Pete Docter, Bob Peterson",
    guionista: "Bob Peterson, Pete Docter",
    género: "Aventura, Comedia"
  }

{
nombre: "Frozen",
año: 2013,
director: "Chris Buck, Jennifer Lee",
guionista: "Jennifer Lee",
género: "Fantasía, Musical"
},
{
nombre: "Inside Out",
año: 2015,
director: "Pete Docter, Ronnie del Carmen",
guionista: "Pete Docter, Meg LeFauve, Josh Cooley",
género: "Comedia, Drama"
},
{
nombre: "Despicable Me",
año: 2010,
director: "Pierre Coffin, Chris Renaud",
guionista: "Cinco Paul, Ken Daurio",
género: "Comedia, Familia"
},
{
nombre: "Moana",
año: 2016,
director: "Ron Clements, John Musker",
guionista: "Jared Bush",
género: "Aventura, Fantasía"
},
{
nombre: "Big Hero 6",
año: 2014,
director: "Don Hall, Chris Williams",
guionista: "Jordan Roberts, Robert L. Baird, Daniel Gerson",
género: "Aventura, Ciencia Ficción"
},
{
nombre: "Ratatouille",
año: 2007,
director: "Brad Bird, Jan Pinkava",
guionista: "Brad Bird, Jan Pinkava, Jim Capobianco",
género: "Comedia, Familia"
},
{
nombre: "Kung Fu Panda",
año: 2008,
director: "Mark Osborne, John Stevenson",
guionista: "Jonathan Aibel, Glenn Berger",
género: "Acción, Comedia"
},
{
nombre: "The Nightmare Before Christmas",
año: 1993,
director: "Henry Selick",
guionista: "Caroline Thompson, Michael McDowell",
género: "Fantasía, Musical"
},
{
nombre: "How to Train Your Dragon",
año: 2010,
director: "Dean DeBlois, Chris Sanders",
guionista: "William Davies, Dean DeBlois, Chris Sanders",
género: "Aventura, Fantasía"
},
{
nombre: "Monsters, Inc.",
año: 2001,
director: "Pete Docter, David Silverman, Lee Unkrich",
guionista: "Andrew Stanton, Daniel Gerson",
género: "Comedia, Familia"
}


{
    nombre": "My Neighbor Totoro",
    año": 1988,
    director": "Hayao Miyazaki",
    guionista": "Hayao Miyazaki",
    género": "Fantasía, Aventura"
  },
  {
    nombre": "Spirited Away",
    año": 2001,
    director": "Hayao Miyazaki",
    guionista": "Hayao Miyazaki",
    género": "Fantasía, Aventura"
  },
  {
    nombre": "Akira",
    año": 1988,
    director": "Katsuhiro Otomo",
    guionista": "Katsuhiro Otomo, Izo Hashimoto",
    género": "Ciencia Ficción, Acción"
  },
  {
    nombre": "Ghost in the Shell",
    año": 1995,
    director": "Mamoru Oshii",
    guionista": "Kazunori Itō",
    género": "Ciencia Ficción, Acción"
  },
  {
    nombre": "Princess Mononoke",
    año": 1997,
    director": "Hayao Miyazaki",
    guionista": "Hayao Miyazaki",
    género": "Fantasía, Aventura"
  },
  {
    nombre": "Your Name",
    año": 2016,
    director": "Makoto Shinkai",
    guionista": "Makoto Shinkai",
    género": "Romance, Fantasía"
  },
  {
    nombre": "Grave of the Fireflies",
    año": 1988,
    director": "Isao Takahata",
    guionista": "Isao Takahata",
    género": "Drama, Guerra"
  },
  {
    nombre": "Nausicaä of the Valley of the Wind",
    año": 1984,
    director": "Hayao Miyazaki",
    guionista": "Hayao Miyazaki",
    género": "Fantasía, Aventura"
  },
  {
    nombre": "Howl's Moving Castle",
    año": 2004,
    director": "Hayao Miyazaki",
    guionista": "Hayao Miyazaki",
    género": "Fantasía, Aventura"
  },
  {
    nombre: "The Wind Rises",
    año: 2013,
    director: "Hayao Miyazaki",
    guionista: "Hayao Miyazaki",
    género: "Drama, Biografía"
  },
  {
    nombre: "Perfect Blue",
    año: 1997,
    director: "Satoshi Kon",
    guionista: "Sadayuki Murai",
    género: "Thriller, Psicológico"
  },
  {
    nombre: "The Girl Who Leapt Through Time",
    año: 2006,
    director: "Mamoru Hosoda",
    guionista: "Satoko Okudera",
    género: "Ciencia Ficción, Romance"
  },
  {
    nombre: "5 Centimeters per Second",
    año: 2007,
    director: "Makoto Shinkai",
    guionista: "Makoto Shinkai",
    género: "Romance, Drama"
  },
  {
    nombre: "A Silent Voice",
    año: 2016,
    director: "Naoko Yamada",
    guionista: "Reiko Yoshida",
    género: "Drama, Romance"
  },
  {
    nombre: "Paprika",
    año: 2006,
    director: "Satoshi Kon",
    guionista: "Seishi Minakami, Satoshi Kon",
    género: "Ciencia Ficción, Thriller"
  },
  {
    nombre: "Weathering with You",
    año: 2019,
    director: "Makoto Shinkai",
    guionista: "Makoto Shinkai",
    género: "Fantasía, Romance"
  },
  {
    nombre: "Kiki's Delivery Service",
    año: 1989,
    director: "Hayao Miyazaki",
    guionista: "Hayao Miyazaki",
    género: "Fantasía, Aventura"
  },
  {
    nombre: "Castle in the Sky",
    año: 1986,
    director: "Hayao Miyazaki",
    guionista: "Hayao Miyazaki",
    género: "Fantasía, Aventura"
  },
  {
    nombre: "Porco Rosso",
    año: 1992,
    director: "Hayao Miyazaki",
    guionista: "Hayao Miyazaki",
    género: "Aventura, Comedia"
  },
  {
    nombre: "The Tale of the Princess Kaguya",
    año: 2013,
    director: "Isao Takahata",
    guionista: "Isao Takahata, Riko Sakaguchi",
    género: "Fantasía, Drama"
  },
  {
    nombre: "Redline",
    año: 2009,
    director: "Takeshi Koike",
    guionista: "Katsuhito Ishii",
    género: "Acción, Ciencia Ficción"
  },
  {
    nombre: "Wolf Children",
    año: 2012,
    director: "Mamoru Hosoda",
    guionista: "Mamoru Hosoda, Satoko Okudera",
    género: "Drama, Fantasía"
  },
  {
    nombre: "Summer Wars",
    año: 2009,
    director: "Mamoru Hosoda",
    guionista: "Satoko Okudera",
    género: "Ciencia Ficción, Aventura"
  },
  {
    nombre: "Millennium Actress",
    año: 2001,
    director: "Satoshi Kon",
    guionista: "Sadayuki Murai",
    género: "Drama, Romance"
  },
  {
    nombre: "The Secret World of Arrietty",
    año: 2010,
    director: "Hiromasa Yonebayashi",
    guionista: "Hayao Miyazaki, Keiko Niwa",
    género: "Fantasía, Aventura"
  },
  {
    nombre: "When Marnie Was There",
    año: 2014,
    director: "Hiromasa Yonebayashi",
    guionista: "Hiromasa Yonebayashi, Keiko Niwa, Masashi Ando",
    género: "Drama, Fantasía"
  },
  {
    nombre: "Tokyo Godfathers",
    año: 2003,
    director: "Satoshi Kon",
    guionista: "Keiko Nobumoto",
    género: "Comedia, Drama"
  },
  {
    nombre: "The Garden of Words",
    año: 2013,
    director: "Makoto Shinkai",
    guionista: "Makoto Shinkai",
    género: "Romance, Drama"
  },
  {
    nombre: "The Cat Returns",
    año: 2002,
    director: "Hiroyuki Morita",
    guionista: "Reiko Yoshida",
    género: "Fantasía, Aventura"
  },
  {
    nombre: "Whisper of the Heart",
    año: 1995,
    director: "Yoshifumi Kondō",
    guionista: "Hayao Miyazaki",
    género: "Romance, Drama"
  }



]
``` */





/* 

[
    {
      "nombre": "Toy Story",
      "año": 1995,
      "director": "John Lasseter",
      "guionista": "Joss Whedon, Andrew Stanton, Joel Cohen, Alec Sokolow"
    },
    {
      "nombre": "El Rey León",
      "año": 1994,
      "director": "Roger Allers, Rob Minkoff",
      "guionista": "Irene Mecchi, Jonathan Roberts, Linda Woolverton"
    },
    {
      "nombre": "Shrek",
      "año": 2001,
      "director": "Andrew Adamson, Vicky Jenson",
      "guionista": "Ted Elliott, Terry Rossio, Joe Stillman, Roger S.H. Schulman"
    },
    {
      "nombre": "Finding Nemo",
      "año": 2003,
      "director": "Andrew Stanton, Lee Unkrich",
      "guionista": "Andrew Stanton, Bob Peterson, David Reynolds"
    },
    {
      "nombre": "Spirited Away",
      "año": 2001,
      "director": "Hayao Miyazaki",
      "guionista": "Hayao Miyazaki"
    },
    {
      "nombre": "The Incredibles",
      "año": 2004,
      "director": "Brad Bird",
      "guionista": "Brad Bird"
    },
    {
      "nombre": "WALL-E",
      "año": 2008,
      "director": "Andrew Stanton",
      "guionista": "Andrew Stanton, Jim Reardon"
    },
    {
      "nombre": "Coco",
      "año": 2017,
      "director": "Lee Unkrich, Adrian Molina",
      "guionista": "Adrian Molina, Matthew Aldrich"
    },
    {
      "nombre": "Zootopia",
      "año": 2016,
      "director": "Byron Howard, Rich Moore",
      "guionista": "Jared Bush, Phil Johnston"
    },
    {
      "nombre": "Up",
      "año": 2009,
      "director": "Pete Docter, Bob Peterson",
      "guionista": "Bob Peterson, Pete Docter"
    }
  ] */
      


      