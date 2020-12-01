//JavaScript Document
var edad;
function comenzar() {
  edad = document.getElementById("edad");
  edad.addEventListener("change",cambiarRango,false);
  document.registro_usr.addEventListener("invalid", validar, true);
  document.getElementById("enviar").addEventListener("click", enviar, false);
  document.registro_usr.addEventListener("input", validarTR, true);
}

function cambiarRango() {
  var salida = document.getElementById("rango");
  var calculo = edad.value-30;
  if(calculo<30){
    calculo = 0;
    edad.value = 30;
  }
  salida.innerHTML = calculo + " a " + edad.value;
}
function validar(e) {
  var elemento = e.target;
  elemento.style.background = "red";
}
function enviar() {
  var correcto = document.registro_usr.checkValidity();
  if(correcto == true){
    document.registro_usr.submit();
  }
}
function validarTR(e) {
  var elemento = e.target;
  if(elemento.validity.valid == true){
    elemento.style.background = "white";
  }else{
    elemento.style.background = "red";
  }
  
}
window.addEventListener("load", comenzar, false);