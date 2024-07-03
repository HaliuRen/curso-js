const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


let total = 0;


// con un forEach
carrito.forEach( producto => total += producto.precio);
console.log(total);

// Con un reduce - toma una gran cantidad de datos, los une y devuelve el resultado
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);