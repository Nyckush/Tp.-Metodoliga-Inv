//variables para descripcion General , materias, Administraciones//


let descripcion = document.getElementById("opc1");
let materias = document.getElementById("opc2");
let Administraciones = document.getElementById("opc3");


//---MATERIAS----//
function materiasClick (){
    materias.style.backgroundColor="rgba(75, 75, 75, 0.5)";
    materias.style.border="solid 1px rgba(13, 231, 46, 0.6)";
    descripcionVolver();
    administracionesVolver();
}
function materiasVolver(){
    materias.style.backgroundColor="";
    materias.style.border="";
}
//------------//


//---DESCRIPCION---//

function descripcionClick () {
    descripcion.style.backgroundColor="rgba(75, 75, 75, 0.5)";
    descripcion.style.border="solid 1px rgba(13, 231, 46, 0.6)";
    materiasVolver();
    administracionesVolver();
}

function descripcionVolver (){

    descripcion.style.backgroundColor="";
    descripcion.style.border="";
}

//------------//


//---Administraciones----//

function administracionesClick () {
    Administraciones.style.backgroundColor="rgba(75, 75, 75, 0.5)";
    Administraciones.style.border="solid 1px rgba(13, 231, 46, 0.6)";
    descripcionVolver();
    materiasVolver();
}


function administracionesVolver () {

    Administraciones.style.backgroundColor="";
    Administraciones.style.border="";

}


//---------------//


descripcion.addEventListener("click",descripcionClick);
materias.addEventListener("click",materiasClick);
Administraciones.addEventListener("click",administracionesClick);



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






 












