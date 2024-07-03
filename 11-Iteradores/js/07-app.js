const pendientes = ['Tarea', 'comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
    { nombre: 'BMTH', precio: 850 },
    { nombre: 'Bad Omens', precio: 650 },
    { nombre: 'Sleep Token', precio: 500 },
    { nombre: 'While She Sleeps', precio: 700 },
    { nombre: 'Slipknot', precio: 1500 },
    { nombre: 'Evanescence', precio: 850 },
]

for( let pendiente of pendientes ) {
    console.log(pendiente);
}

for( let producto of carrito ){
    console.log(producto.nombre);
}