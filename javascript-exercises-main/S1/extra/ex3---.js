const movies = [{name: "Your Name", durationInMinutes: 130},
{name: "Pesadilla antes de navidad", durationInMinutes: 225},
 {name: "Origen", durationInMinutes: 165},
  {name: "El señor de los anillos", durationInMinutes: 967},
   {name: "Solo en casa", durationInMinutes: 214},
    {name: "El jardin de las palabras", durationInMinutes: 40}];

const peliculasCortas = [];
const peliculasMedias = [];
const peliculasLargas = [];

     
    for (const iterator of movies) {
            if(iterator.durationInMinutes < 100) {
                peliculasCortas.push(name);
            }else if (iterator.durationInMinutes >= 100) {
                peliculasMedias.push(name);
            }else if (iterator.durationInMinutes > 200) {
                     peliculasLargas.push(name);
            }
            
    }
        
    console.log('las peliculas cortas son : ' + peliculasCortas);
