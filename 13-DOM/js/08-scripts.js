const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);



console.log(navegacion);
console.log(navegacion.childNodes); // los espacios en blanco son considerados elelementos
console.log(navegacion.children); // lretorna los elemento reales


console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);

// traversing the DOM

// de padre a hijo

const card = document.querySelector('.card');

card.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM';
card.children[0].src = 'img/hacer3.jpg';

console.log(card.children[1].children[1].textContent);
console.log(card.children[0]);

// de hijo a padre

console.log(card.parentElement.parentElement.parentElement);


console.log(card);

// retorna el elemento hermano de un hijo
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);


const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);
