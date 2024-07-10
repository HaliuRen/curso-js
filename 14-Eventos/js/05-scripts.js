
window.addEventListener('scroll', () => {
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);

    const premium = document.querySelector('.premium');
    
    // retorna la ubicacion 
    const ubicacion = premium.getBoundingClientRect();

    console.log(ubicacion);

    if(ubicacion.top < 784){
        console.log('El elemento ya esta visible');
    } else{
        console.log('Da mas scroll');
    }
})