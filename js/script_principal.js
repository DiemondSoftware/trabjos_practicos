const seccionPrincipal = document.getElementById('seccionprincipal');
const recomendaciones = document.getElementById('recomendaciones');
const textos = document.getElementById('textos');
const lista1 = document.getElementById('lista1');
const lista2 = document.getElementById('lista2');
const video = document.getElementById('video');
const mapa  = document.getElementById('mapa');
const tarjeta1  = document.getElementById('tarjeta1');
const tarjeta2  = document.getElementById('tarjeta2');
const tarjeta3  = document.getElementById('tarjeta3');
const tarjeta4  = document.getElementById('tarjeta4');







function modoOscuro() {
    document.body.style.color = 'white';
    document.body.style.backgroundImage = '';
    seccionPrincipal.style.color = 'white';
    recomendaciones.style.color = 'white';
    textos.style.backgroundColor = '#1c1a1a';
    lista1.style.backgroundColor = '#1c1a1a';
    lista2.style.backgroundColor = '#1c1a1a';
    video.style.backgroundColor = '#1c1a1a';
    mapa.style.backgroundColor = '#1c1a1a';
    tarjeta1.style.backgroundColor = '#1c1a1a';
    tarjeta1.style.color = 'white';

    tarjeta2.style.backgroundColor = '#1c1a1a';
    tarjeta2.style.color = 'white';

    tarjeta3.style.backgroundColor = '#1c1a1a';
    tarjeta3.style.color = 'white';

    tarjeta4.style.backgroundColor = '#1c1a1a';
    tarjeta4.style.color = 'white';
    

}

function mostrarInfo() {
    alert("Nombre: Diego Alejandro Savino. Edad: 19");
}