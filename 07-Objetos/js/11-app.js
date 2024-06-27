const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

// this es una palabra reservada

const producto2 = {
    nombre: "Tablet",
    precio: 4000,
    disponible: true,
    mostrarInfo: function() { // this : hace referencia al objeto donde fue declarado, entonces accede a las propiedades del objeto producto2
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}


producto.mostrarInfo();
producto2.mostrarInfo();
