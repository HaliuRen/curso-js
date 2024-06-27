const reproductor = {
    cancion:'',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción... ${id}`),
    crearPlaylist: nombre => console.log(`Creando playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo playlist ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
    
}

reproductor.nuevaCancion = 'Just Pretend';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(40);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Metal Core');
reproductor.reproducirPlaylist('Metal Core');