let notificacion = document.getElementById("notificacion");
let iconoNotificacion = document.getElementById("Capa_3");


function mostrarNotificacion () {

    notificacion.style.visibility="visible";
    iconoNotificacion.style.backgroundColor="white";
    iconoNotificacion.style.fill="rgb(13, 231, 46)";

  
}

function EsconderNotificacion(){

notificacion.style.visibility="hidden";
iconoNotificacion.style.backgroundColor="";
iconoNotificacion.style.fill="";


}

function MostrayEsconderNotificacion(){


if(notificacion.style.visibility=="hidden"){

    return mostrarNotificacion();
}
else {
   return EsconderNotificacion();
}
}


iconoNotificacion.addEventListener("click",MostrayEsconderNotificacion);






//menu//

let menu = document.getElementById("menu");
let contenidoMenu = document.getElementById("contentMenu");


function mostrarMenu (){

if(contenidoMenu.style.left=="-355px"){
    contenidoMenu.style.left="2px";
contenidoMenu.style.transition="0.4s";
}
else{

    contenidoMenu.style.left="-355px";
    contenidoMenu.style.transition="0.4s";
}




}

menu.onclick=mostrarMenu;




