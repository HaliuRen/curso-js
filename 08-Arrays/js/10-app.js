const carrito = [
    { nombre: 'BMTH', precio: 850 },
    { nombre: 'Bad Omens', precio: 650 },
    { nombre: 'Sleep Token', precio: 500 },
    { nombre: 'While She Sleeps', precio: 700 },
    { nombre: 'Slipknot', precio: 1500 },
    { nombre: 'Evanescence', precio: 850 },
]

const nuevoArreglo = carrito.forEach(function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

// crea un nuevo arreglo
const nuevoArreglo2 = carrito.map(function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);