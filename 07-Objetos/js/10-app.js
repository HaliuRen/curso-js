"use strict"; 

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

// une objetos
const resultado = Object.assign(producto, medidas);

// Spread operator o Rest Operator - Copia los objetos y los unifica
const resultado2= {...producto, ...medidas}


console.log(resultado);
console.log(resultado2);
