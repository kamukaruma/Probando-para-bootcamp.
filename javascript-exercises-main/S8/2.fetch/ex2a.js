const baseUrl = 'https://api.nationalize.io?name=';

fetch('https://api.nationalize.io?name=')
.then((response) => response.json)
.then (res) => console.log()
 
const buscador = document.querySelector("input")
const ver evento = (evento) => {
    console.log(event.target.value)
};

