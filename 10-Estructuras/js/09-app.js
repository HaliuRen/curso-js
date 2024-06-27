const autenticado = true;
const puedePagar = false;

// ternario

console.log( autenticado ? 'Si esta atutenticado ' : 'No, no esta autenticado');
console.log( autenticado || puedePagar ? 'Si puede pagar' : 'No, no esta autenticado');

// ternario anidado

console.log( autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si autenticado, no puede pagar' : 'No no esta autenticado');