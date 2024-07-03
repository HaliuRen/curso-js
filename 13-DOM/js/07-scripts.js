const encabezado = document.querySelector('h1');
console.log(encabezado.style);

// los estilos en js vs Css
// justifyContent vs justify-content
// backgroundColor vs background-color

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';


const card = document.querySelector('.card');

// agregar nuevas clases a un elemento
card.classList.add('nueva-clase', 'segunda-clase');

// eliminar clases de un elemento
card.classList.remove('card', 'nueva-clase');

console.log(card.classList);
