const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']}]
const comedia = [];
const aventura = [];
const accion = [];
const thriller = [];
const animacion = [];

for (const iterator of movies) {
    const title = iterator.title ;
    const categories = iterator.categories;
    for (let index = 0; index < categories.length; index++) {
        const element = categories[index];
        if (element === "comedia"){ 
        comedia.push(title);
     } if (element === "aventura"){ 
            aventura.push(title);
     } if (element === "accion"){ 
            accion.push(title);
     } if (element === "thriller"){ 
              thriller.push(title);
     }   if (element === "animacion"){ 
             animacion.push(title);
         }
    
     }                  
}                       
                         
                 
console.log('Las peliculas de comedia son: ' + comedia); 
console.log('Las peliculas de aventura son: ' + aventura);
console.log('Las peliculas de accion son: ' + accion);
console.log('Las peliculas de thriller son: ' + thriller);
console.log('Las peliculas de animacion son: ' + animacion);     
  
    
    

    
 
    
 