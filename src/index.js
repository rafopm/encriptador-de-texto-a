const vocales = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };

function encriptador() {
  var obj = document.querySelector('.texto').innerHTML;
  if (obj === "") alert("Debe ingresar el texto a encriptar.")
  else {
    var enc = ""
    for (let i = 0; i < obj.length; i++) {
      enc = (vocales[obj[i]]) ? enc += vocales[obj[i]] : enc += obj[i];
    }
    show(start);
    hide(end);
    document.getElementById('areaTexto').innerHTML = enc;
    document.querySelector('.texto').innerHTML = "";
  }
  document.addEventListener('DOMContentLoaded', function() {
    autosize(document.querySelectorAll('areaTexto'));
}, false);
}

function desencriptador() {
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
    letras = " abcdefghijklmnñopqrstuvwxyz",
    especiales = [], //[8, 37, 39, 46],
    tecla_especial = false;

  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    return false;
  }
}

document.querySelector('#miTexto').onkeyup = function (e) {
  this.value = String(this.value || '').toLowerCase();
};

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

function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.querySelector(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}