const producto = 'Monitor 20 pulgadas';

// .repeat te va a apermitir repetir una cadena de texto...

const texto = 'en Promoción'.repeat(2.4); // si es un numero decimal , lo redondea
console.log(texto);
console.log(`${producto} ${texto} !!!`);


// split dividir un string 
const actividad = "Estoy aprendiendo javascript moderno";
console.log(actividad.split(" "));

const hobbies= 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo javascript moderno #JSModerno";
console.log(tweet.split('#'));