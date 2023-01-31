let puntosUsuario = 0;
let puntosPc = 0;

let intstucciones = document.querySelector("#isntrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPc = document.querySelector("#puntos-computadora");

/*contenedorPuntosUsuario.innerText= 2; esto se hace para hacer
pruebas*/

let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegi-tu-arma");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPc = document.querySelector("#eleccion-computadora");

let BotonoesArmas = document.querySelectorAll(".arma");
BotonoesArmas.forEach(boton =>{
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    let eleccionPc = Math.floor(Math.random() *3);
    console.log(eleccionPc);


}




