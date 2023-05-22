const users = [{name: "Abel", years: 43},
 {name: "Maria", years: 18},
 {name: "Pedro", years: 14},
 {name: "Samantha", years: 32},
 {name: "Raquel", years: 16}];

 for (const iterator of users) {
  if ( iterator.years < 18) {
  console.log('Los usuarios menos de edad son: ' + iterator.name);
  } else {
    console.log ('Los usuarios mayores de edad son: ' + iterator.name);
  }
}