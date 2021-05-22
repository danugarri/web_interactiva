//variables donde alamaceno el acceso a los elementos del dom
let links= document.getElementById('enlaces');//aquí accedo al elemto nav del DOM
let botonAbrir=document.getElementById('abrir');//accedo al botón de abrir
let botonCerrar=document.getElementById('cerrar');
let mensaje= document.getElementById('mensaje');
let logo=document.getElementById('logo');
let texto=document.getElementById('texto');
let interactividad=document.getElementById('interactividad');
let html=document.getElementById('limites-texto');
let logoTeclado= document.getElementById('logo-teclado')

//oculto el botón cerrar en el momento de que el navegador cargue la web
botonCerrar.hidden='true'
//event handler function

// función abrir
const mostrarMenu=()=>{
    links.style.display='block';
    mensaje.style.display='block';
   botonAbrir.style.display='none';//así cuando se despliega el menú sólo aparecerá el botón de cerrar
   botonCerrar.style.display='block';// para que aparezca en la posición indicada
   
}

//función cerrar
const ocultarMenu= ()=> {
    links.style.display='none';
    botonCerrar.style.display='none';
    botonAbrir.style.display='block';//para que vuelva a aparecer el botón
  
}
//función mostrar mensaje
const mostrarMensaje= () =>{}

//función para que el logo aumente de tamaño cuando haces mouseover
const aumentaLogo = () =>{
    logo.style.height='90%';
    //logo.style.width='';
    logo.style.zIndex='1';
    botones.style.zIndex='-1'
}
//función para que el logo vuelva a su tamaño
const reduceLogo = () =>{
    logo.style.height='75%';
    //logo.style.width='';
    
}
    
//llamo a la función
//función abrir menu

botonAbrir.addEventListener('click',mostrarMenu);

//función cerrar menu
botonCerrar.onclick= ocultarMenu;

//función mostrar mensaje
botonAbrir.addEventListener('click',mostrarMensaje)

//funcion aumenta logo
logo.onwheel=aumentaLogo;

//función reduce logo
logo.onmouseout=reduceLogo;

//abro y cierro menu con el  logo

/*********utilizando onclick*********/
logo.onclick=mostrarMenu;
logo.ondblclick=ocultarMenu;





//interactividad
//aumenta texto
const cambiaTexto= () =>{
    texto.style.fontSize='80px'
}
//evento
texto.onclick=cambiaTexto;

//vuelve a tamaño inicial
const returnSize = () =>{
    texto.style.fontSize='20px'
    }
texto.ondblclick=returnSize;
// prueba con alert

function saludar(){
alert('Bienvenidos'+'\nEsta es una web interactiva desarrollada con JavaScript'+'\nTe animo a intereactuar con el mouse y el teclado')

}
saludar();