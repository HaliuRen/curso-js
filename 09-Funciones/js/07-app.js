
iniciarApp();

function iniciarApp() {
    console.log('Iniciando app...');

    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda función');
    usuarioAutenticado('Perla');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario} `);
}