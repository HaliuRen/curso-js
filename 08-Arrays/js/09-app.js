const carrito = [
    { nombre: 'BMTH', precio: 850 },
    { nombre: 'Bad Omens', precio: 650 },
    { nombre: 'Sleep Token', precio: 500 },
    { nombre: 'While She Sleeps', precio: 700 },
    { nombre: 'Slipknot', precio: 1500 },
    { nombre: 'Evanescence', precio: 850 },
]

for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

carrito.forEach(function (producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})