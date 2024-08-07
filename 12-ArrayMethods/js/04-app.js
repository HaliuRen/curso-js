const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


let resultado;

// filtra los elementos de un arreglo dependiendo de las condicones 

resultado = carrito.filter( producto => producto.precio > 400 );
resultado = carrito.filter( producto => producto.precio < 600);
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos');
resultado = carrito.filter( producto => producto.nombre === 'Audifonos');


console.log(resultado);