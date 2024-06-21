
// un objeto dentro de otro objeto
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        cantidad: 1,
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'china'
        }
    }
}

console.log(producto);

console.log(producto.informacion);
console.log(producto.informacion.cantidad);
console.log(producto.informacion.medidas);
console.log(producto.informacion.fabricacion.pais);
