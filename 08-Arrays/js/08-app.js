const producto = {
    nombre: "Monitor de 30 pulgadas",
    precio: 4300,
    disponible: true
}

// Destructurando objeto
const { nombre} = producto;

console.log(nombre);

// Destructurando arreglos
const numero = [10,20,30,40,50];

// const [primero, segundo] = numero;

// const [ , , , , quinto] = numero;

const [ primero, ...tercero] = numero;

console.log(primero);
// console.log(segundo);
// console.log(quinto);
console.log(tercero);

