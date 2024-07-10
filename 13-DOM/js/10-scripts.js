// creando el elemento
const enlace = document.createElement('A');

// Agregando texto
enlace.textContent = 'Nuevo Enlace';

// añadiendo href
enlace.href = '/nuevo-enlace';

// añadiendo target
enlace.target = '_blank';

enlace.setAttribute('data-enlace', 'nuevo-enlace');

// agregando una clase al nuevo elemento
enlace.classList.add('alguna-clase');

// agregando una funcion al nuevo elemento
enlace.onclick = miFuncion;


// Seleccionar la navegacion 
const navegacion = document.querySelector('.navegacion');

// agregando a navegacion el nuevo enlace - lo agrega al ultimo 
// navegacion.appendChild(enlace);

// agregando a navegacion el nuevo enlace - lo agrea en la posicion que se le indique
navegacion.insertBefore(enlace, navegacion.children[1]);



// funcion
function miFuncion() {
    alert('Diste Click');
}


console.log(enlace);



// Crear un card de forma dinamica
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concrete Jungle - Bad Omens'
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$2,500 por persona';
parrafo3.classList.add('precio');

// Crear div con la clase de info
const info = document.createElement('div');
// añaniendo la clase info
info.classList.add('info');

// añadiendo los parrafos
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el card
const card = document.createElement('div');
card.classList.add('card');

// asignar la imagen
card.appendChild(imagen);

// asignar info
card.appendChild(info);

// insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
// contenedor.appendChild(card); // agregando al ultimo 
contenedor.insertBefore(card, contenedor.children[0]); //indicando la posicion 

