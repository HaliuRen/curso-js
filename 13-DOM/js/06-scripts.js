const encabezado = document.querySelector('.contenido-hero h1');

console.log(encabezado);

console.log(encabezado.innerText); // retorna el texto de ese elemento
console.log(encabezado.textContent); // retorna el texto aunque este oculto en css
console.log(encabezado.innerHTML); // retorna el html de ese elemento 

const encabezado2 = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado2);

// cambiando contenido de un elemento
document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';

const nuevoHeading = 'Nuevo Heading'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

// cambiando una imagen de un elemento 
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';

