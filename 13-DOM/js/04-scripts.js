// querySelector solo retorna un elemento sea clase o id

const card = document.querySelector('.card');
console.log(card);

// podemos tener selectores especificos como en css
const info = document.querySelector('.premium .info');
console.log(info);

// selecciona el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// seleccionar el formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);

// selecciona elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);