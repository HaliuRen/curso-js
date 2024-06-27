const carrito = [];

const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 8000
}

const producto3 = {
    nombre: "Teclado",
    precio: 1500
}

let resultado;

// [...carrito] -> se hace copia con los puntitos

resultado = [...carrito, producto]; // asignando a resultado una copia del arreglo carrito y el objeto producto
resultado = [...resultado, producto2]; // reasignando a resultado una copia de resultado y el objeto producto2
resultado = [producto3,...resultado, ]; // reasignando a resultado una copa de resultado y el objeto producto3

console.table(resultado);