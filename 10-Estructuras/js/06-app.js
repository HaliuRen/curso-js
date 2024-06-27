const usuario = false;
const puedePagar = false;

// operador && - que se cumplan amnbas condiciones

if(usuario && puedePagar) {
    console.log('Si puedes comprar');
} else if (!puedePagar && !usuario) {
    console.log('No, no puedes comprar');
} else if(!usuario){
    console.log('Inicia seson o crea una cuenta');
} else if(!puedePagar){
    console.log('Fondos insuficientes');
}