// funcion con valores por default

function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Perla', 'Mendoza Osorio');
saludar('Perla');
saludar();
