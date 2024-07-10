const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('click', () => {
    console.log('click en nav');
})

nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegación');
    nav.style.backgroundColor = 'white';

})

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegación');
    
    nav.style.backgroundColor = 'transparent';
})

// similar al click 
nav.addEventListener('mousedown', () => {
    console.log('similar al click');
    
    nav.style.backgroundColor = 'white';
})

// cuando seltas el mouse
nav.addEventListener('mouseup', () => {
    console.log('click suelto');
    
    nav.style.backgroundColor = 'white';
})

// doble lcick
nav.addEventListener('dblclick', () => {
    console.log('doble click');
    
    nav.style.backgroundColor = 'white';
})

