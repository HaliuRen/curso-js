// Metodos de propiedad - funciones dentro de un objeto

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function(){
        console.log('pausando...');
    },
    borrar: function(id){
        console.log(`Borrando canción... ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo playlist ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(40);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Metal Core');
reproductor.reproducirPlaylist('Metal Core');
