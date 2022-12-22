const vocales = {a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat"};

function encriptador() {
    var obj = document.getElementById('miTexto').value;
    var enc = ""
    for (let i = 0; i < obj.length; i++) {
        enc = (vocales[obj[i]])? enc += vocales[obj[i]]:enc += obj[i];
    }
    document.getElementById('areaTexto').innerHTML = enc;
    document.getElementById('miTexto').value="";
}

function desencriptador() {
    var obj = document.getElementById('miTexto').value;
    var desec = ""
    for (let i = 0; i < obj.length; i++) {
        if (vocales[obj[i]]) {
            desec += obj[i]
            i += vocales[obj[i]].length - 1;
        } else desec += obj[i]
    }
    document.getElementById('areaTexto').innerHTML = desec;
    document.getElementById('miTexto').value="";
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

  document.querySelector('#miTexto').onkeyup = function(e) {
    this.value = String(this.value || '').toLowerCase();
  };