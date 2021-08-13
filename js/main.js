const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');
const flechaizquierda = document.getElementById('flecha-izquierda');
const flechaderecha = document.getElementById('flecha-derecha');

var inicio = document.getElementById("login");
var misdatos = document.getElementById("registro");
var elegir = document.getElementById("elegir");

//TODO: VENTANA MODAL 
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

/**************  Evento listener para la flecha derecha y izquierda  **************************/
/*Cuando demos click en la flecha derecha  obtengas el escrol de la fila y le sumes el offsetWidth*/
flechaderecha.addEventListener('click', ()=>{
    fila.scrollLeft += fila.offsetWidth;
    //Accedemos al indicador activo
    const indicadorActivo = document.querySelector('.indicadores .activo');
    //preguntamos si tiene algun elemento a la izquierda
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});
flechaizquierda.addEventListener('click', ()=>{
    fila.scrollLeft -= fila.offsetWidth;
        //Accedemos al indicador activo
        const indicadorActivo = document.querySelector('.indicadores .activo');
        //preguntamos si tiene algun elemento a la derecha
        if (indicadorActivo.previousSibling) {
            indicadorActivo.previousSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
});
/****************** PAGINACION - INDICADORES    ***************************/
/*OJO  utilizamos la libreria Math.cell pra redondial el 
numero de longitud y de esta forma poder obtener cuantos indicadores necesitamos para el scroll.*/
const numeroPaginas = Math.ceil(peliculas.length / 5); /*obtenenos el numero d epagina*/
for (let i = 0; i < numeroPaginas; i++) {
    /*por cada pagina queremos crear un boton y lo queremos poner en appchild*/
    const indicador = document.createElement('button');
    if (i === 0) {
        indicador.classList.add('activo');
    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e)=>{
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}
/****************  Hover a las imagenes del slider-carousel  ******************************/
peliculas.forEach((pelicula) => { //por cada pelicula
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget; //obteniendo el elemento al cual le pasamos el mause dentro.
        //despues de un tiempo me agrege el efecto hover
        setTimeout(()=>{
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 200);
    });
});

fila.addEventListener('mouseleave', ()=>{
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});

/* login*/
function login(){
    inicio.style.left = "10px";
    misdatos.style.left = "450px";
    elegir.style.left = "0px";
}
function registro(){
    inicio.style.left = "-400px";
    misdatos.style.left = "10px";
    elegir.style.left = "120px";
}

//TODO: VENTANA MODAL 
open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});