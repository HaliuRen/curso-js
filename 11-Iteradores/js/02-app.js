// for ( let i = 0; i <= 10; i++ ) {
//     if( i === 5) {
//         console.log('CINCO');
//         // continue;
//         break; // corta el for loop

//     }
//     console.log(`Numero:  ${i}`);
// }


const carrito = [
    { nombre: 'BMTH', precio: 850 },
    { nombre: 'Bad Omens', precio: 650 },
    { nombre: 'Sleep Token', precio: 500, descuento: true },
    { nombre: 'While She Sleeps', precio: 700 },
    { nombre: 'Slipknot', precio: 1500 },
    { nombre: 'Evanescence', precio: 850 },
]

for(let i = 0; i < carrito.length; i++ ) {
    if(carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);

}