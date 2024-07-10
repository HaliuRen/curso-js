
const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () =>{
//     console.log('escribiento...');
// })

// busqueda.addEventListener('keyup', () =>{
//     console.log('escribiento...');
// })

// busqueda.addEventListener('blur', () =>{
//     console.log('escribiento...');
// })

// busqueda.addEventListener('copy', () =>{
//     console.log('copiando...');
// })

// busqueda.addEventListener('paste', () =>{
//     console.log('pegando...');
// })

// busqueda.addEventListener('cut', () =>{
//     console.log('cortando...');
// })

// busqueda.addEventListener('input', () =>{
//     console.log('toto en uno...');
// })

// e = evento
// validar que un input esta vacio o no 
busqueda.addEventListener('input', (e) =>{
    if(e.target.value === ''){
        console.log('Fallo la validación');
    }

    // console.log(e.target.value);

});


