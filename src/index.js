const vocales = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };

function encriptador() {
  var obj = document.getElementById('miTexto').value;
  if (obj === "") alert("Debe ingresar el texto a encriptar.")
  else {
    var enc = ""
    for (let i = 0; i < obj.length; i++) {
      enc = (vocales[obj[i]]) ? enc += vocales[obj[i]] : enc += obj[i];
    }
    show('areaTexto');
    show('idbtnCopiar');
    
    hide('ocultar1');
    hide('ocultar2');
    hide('ocultar3');
    //hide('idprevius');
    document.getElementById('areaTexto').innerHTML = enc;
    document.getElementById('miTexto').value = "";
  }
}

function desencriptador() {
  if (obj === "") alert("Debe ingresar el texto a encriptar.")
  else {
    var obj = document.getElementById('miTexto').value;
    var desec = ""
    for (let i = 0; i < obj.length; i++) {
      if (vocales[obj[i]]) {
        desec += obj[i]
        i += vocales[obj[i]].length - 1;
      } else desec += obj[i]
    }
    show('areaTexto');
    hide('ocultar1');
    hide('ocultar2');
    hide('ocultar3');
    document.getElementById('areaTexto').innerHTML = desec;
    document.getElementById('miTexto').value = "";
  }
}

//document.getElementById("ID_DEL_ELEMENTO").style.display = "none";

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

//div = document.getElementById('contenido');
//div.setAttribute("class", "ocultar");
//se ejecutara despues de 2 segundos
// setTimeout(mostrarTexto, 2000);
// //se ejecutara despues de 4 segundos
setTimeout(hide('areaTexto'), 0);
setTimeout(hide('idbtnCopiar'), 0);
// function mostrarTexto() {
//   var div = document.getElementsByClassName('txtPreviusTittle');
//   div.setAttribute("class", "overlay");
// }
// function OcultarTexto() {
//   var div = document.getElementsByClassName('txtResult');
//   div.setAttribute("class", "ocultar");
// }//end function OcultarTexto
//activeDiv = document.querySelector('.txtResult');

function hide(idOcultar) {
  var div = document.getElementById(idOcultar);
  div.setAttribute("class", "ocultar");
}

function show(idMostrar) {
  var div = document.getElementById(idMostrar);
  div.setAttribute("class", "mostrar");
}

function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}