const carrito = [
    { nombre: 'BMTH', precio: 850 },
    { nombre: 'Bad Omens', precio: 650 },
    { nombre: 'Sleep Token', precio: 500 },
    { nombre: 'While She Sleeps', precio: 700 },
    { nombre: 'Slipknot', precio: 1500 },
    { nombre: 'Evanescence', precio: 850 },
]

carrito.forEach( (producto) => {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

carrito.forEach( producto => `${producto.nombre} - Precio: ${producto.precio}`);

const nuevoArreglo2 = carrito.map( (producto) => {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

const nuevoArreglo3 = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`);

console.log(carrito);
console.log(nuevoArreglo2);
console.log(nuevoArreglo3);


