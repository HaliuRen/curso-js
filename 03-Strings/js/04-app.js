const producto = '          Monitor 20 pulgadas           ';
console.log(producto);
console.log(producto.length);

// Elimina espacios del inico
console.log( producto.trimStart() );

// Elimina espacios del final
console.log( producto.trimEnd() );

// Elimina espacios de inicio y final
console.log( producto.trimStart().trimEnd() );

// elimina en ambas direcciones
console.log( producto.trim() );