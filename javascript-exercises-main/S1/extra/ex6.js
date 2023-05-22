const goodProducts = [];
const badProducts = [];
const products = [{name: 'Gorra de rodilla', sellCount: 10},
{name: 'Pantalón de pana', sellCount: 302},
{name: 'Reloj de papel albal', sellCount: 23},
{name: 'Inpar de zapatos', sellCount: 6}];

for (const iterator of products) {
    if (iterator.sellCount > 20) {
    goodProducts.push(iterator.name); 
   
  } else {  (iterator.sellCount < 20)
     badProducts.push(iterator.name);
  }  
}

console.log('Los productos buenos son: ' + goodProducts);
console.log('Los productos malos son: ' + badProducts);