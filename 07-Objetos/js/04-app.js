const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// asignando una propiedad a una variable
// const nombre = producto.nombre;
// console.log(nombre);

// Destructurando un objeto - extrae la propiedad y crea la variable
const { nombre, precio, disponible, noExiste} = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExiste);
