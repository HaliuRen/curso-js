const producto = 'Monitor 20 pulgadas';

console.log(producto);

// .replace para reemplazar
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor','Monitor Curvo '));

// .slice para cortar
console.log(producto.slice(0,10));
// console.log(producto.slice(8));
// console.log(producto.slice(2,1)); // no lo realiza

// alternativa a slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); // si lo realiza

// ejemplo circulo de perfil de usuario google
const usuario = 'Perla';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
