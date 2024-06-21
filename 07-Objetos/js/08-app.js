"use strict"; 

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// para evitar modificaciones, eliminaciones o agregar propiedades a un objeto 
Object.freeze ( producto );

producto.disponible = false;
producto.imagen = "imagen.jpg";

console.log(producto);

// para saber si el objeto esta protegido
console.log(Object.isFrozen(producto));