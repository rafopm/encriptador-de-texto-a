const vocales = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };

function encriptador() {
  var obj = document.querySelector('.texto').innerHTML;
  if (obj === "") alert("Debe ingresar el texto a encriptar.")
  else {
    obj = obj.toLowerCase();
    var enc = ""
    for (let i = 0; i < obj.length; i++) {
      enc = (vocales[obj[i]]) ? enc += vocales[obj[i]] : enc += obj[i];
    }
    show(start);
    hide(end);
    document.getElementById('areaTexto').innerHTML = enc;
    document.querySelector('.texto').innerHTML = "";
  }
  document.addEventListener('DOMContentLoaded', function () {
    autosize(document.querySelectorAll('areaTexto'));
  }, false);
}

function desencriptador() {
  var obj = document.querySelector('.texto').innerHTML;
  if (obj === "") alert("Debe ingresar el texto a encriptar.")
  else {
    var obj = document.querySelector('.texto').innerHTML;
    var desec = ""
    for (let i = 0; i < obj.length; i++) {
      if (vocales[obj[i]]) {
        desec += obj[i]
        i += vocales[obj[i]].length - 1;
      } else desec += obj[i]
    }
    show(start);
    hide(end);
    document.getElementById('areaTexto').innerHTML = desec;
    document.querySelector('.texto').innerHTML = "";
  }
}

function soloLetras(e) {
  var key = e.keyCode || e.which,
    tecla = String.fromCharCode(key).toLowerCase(),
    letras = " abcdefghijklmnñopqrstuvwxyz";
  if (letras.indexOf(tecla) == -1 ) {
    return false;
  }
}


var start = ['idbtnCopiar', 'areaTexto']
var end = ['muneco', 'txtPreviusTittle', 'txtPreviusDesc']
setTimeout(hide(start), 0);

function hide(value) {
  for (let i = 0; i < value.length; i++) {
    document.getElementById(value[i]).style.display = 'none';
  }
}

function show(value) {
  for (let i = 0; i < value.length; i++) {
    document.getElementById(value[i]).style.display = '';
  }
}

function copiar(id){
  let txtCopiar = document.querySelector(id).innerHTML;
  navigator.clipboard.writeText(txtCopiar)
}


function borraTextoInicial(){
  var txtBorrar = document.querySelector('.textoInicial').innerHTML;
  console.log(txtBorrar);
  if(txtBorrar === "Ingrese su mensaje aquí..<span>&nbsp;</span>") document.querySelector('.textoInicial').innerHTML="";
}