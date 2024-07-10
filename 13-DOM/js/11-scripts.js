const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// con funcion anonima 
// btnFlotante.addEventListener('click', () => {
//     console.log('Diste click en el boton');
// });

btnFlotante.addEventListener('click', mostrarOcultarFooter);

// funcin para agregar o quitar una clase
// function mostrarOcultarFooter(){
//     // verificar si el elemento tiene una clase en especifico
//     if(footer.classList.contains('activo')) {
//         footer.classList.remove('activo');
//         btnFlotante.classList.remove('activo');

//     } else{
//         footer.classList.add('activo');
//         btnFlotante.classList.add('activo');
//     }
// }

// funcin para agregar o quitar una clase
function mostrarOcultarFooter(){
    // verificar si el elemento tiene una clase en especifico
    if(footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}