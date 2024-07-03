const automovil = {
    modelo:'Camaro',
    year: 1969,
    motor: '6.0'
}

// for in - iterar sobre un objeto (solo sus propiedades)
for(let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`)
}

//for of - iterar sobre un objeto (valores y llaves)
for( let[llave, valor] of Object.entries(automovil) ) {
    console.log(valor);
    console.log(llaves);
}

