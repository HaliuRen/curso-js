const carrito = [];

// Definir un objeto 
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 4000
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

const producto4 = {
    nombre: "Mouse",
    precio: 1000
}

// .unshift agrega elementos al principio de un arreglo
carrito.unshift(producto3);

carrito.push(producto4);

console.table(carrito);

// // Elimina ultimo elemento de un arreglo
// carrito.pop();
// console.table(carrito);

// // Eliminar primer elemento de un arreglo
// carrito.shift();
// console.table(carrito);

// Eliminar elemento de un arreglo dependiendo de su posicion y la cantidd de elementos que requieras borrar 
carrito.splice(1,1);
console.table(carrito);
