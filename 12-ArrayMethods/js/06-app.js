const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// every - todos los elementos tienen que cumplir la condicion 

const resultado = carrito.every( producto => producto.precio < 500);
console.log(resultado);


// some - almenos un elemento tiene que cumplir la condicion 

const resultado2 = carrito.some( producto => producto.precio < 500);
console.log(resultado2);
