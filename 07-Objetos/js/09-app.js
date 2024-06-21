
"use strict"; 

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// para sellar un objeto - permite modificar las propiedades existentes de un objeto
Object.seal ( producto );

producto.disponible = false;

console.log(producto);

// para saber si el objeto esta sellado
console.log(Object.isSealed(producto));