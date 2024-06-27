// iteradores - se ejecutan hasta que la condicion se cumpla

for( let i = 0; i < 1; i++ ) {
    console.log(`Número: ${i}`);
}

// % modulo es lo que queda en residuo, ejemplo todos los numeros que dejan el residuo en 0 son pares

for(let i = 0; i <= 20; i++) {
    if( i % 2 === 0) {
        console.log(`El npumero ${i} es PAR`);
    } else {
        console.log(`El numero es IMPAR`);
    }
}


const carrito = [
    { nombre: 'BMTH', precio: 850 },
    { nombre: 'Bad Omens', precio: 650 },
    { nombre: 'Sleep Token', precio: 500 },
    { nombre: 'While She Sleeps', precio: 700 },
    { nombre: 'Slipknot', precio: 1500 },
    { nombre: 'Evanescence', precio: 850 },
]

console.log(carrito.length);

for( let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i].nombre);
}