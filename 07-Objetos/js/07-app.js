const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

producto.disponible = false;
delete producto.precio;

console.log(producto);

// un const de tipo objeto si se puede reasignar y eliminar, lo contrario a cuando se intenta reasignar una variable 