const products = [{name: 'Gorra de rodilla', sellCount: 10},
{name: 'Pantalón de pana', sellCount: 302},
{name: 'Reloj de papel albal', sellCount: 23},
{name: 'Inpar de zapatos', sellCount: 6}];

let count = 0;

for (const iterator of products) {
    count += iterator.sellCount;
    console.log('La suma total es : ' iterator.sellCount);
}

    

