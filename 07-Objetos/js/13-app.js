const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// para saber si el objeto tiene o no información - retorna el nombre de las propiedades
console.log( Object.keys( producto ));

// retorna los valores de las propiedades de un objeto
console.log( Object.values( producto ));

// retorna todo lo que contiene el objeto en pares
console.log(Object.entries( producto ));