const carrito = [];

// Definir un objeto 
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 8000
}

// .push agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Teclado",
    precio: 1500
}

// .unshift agrega elementos al principio de un arreglo
carrito.unshift(producto3);


console.table(carrito);