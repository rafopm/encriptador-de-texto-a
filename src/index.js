
let vocales = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};


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
        } else {
            desec += obj[i]
        }
    }
    document.getElementById('areaTexto').innerHTML = desec;
    document.getElementById('miTexto').value="";
}

function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " abcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
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



  function handleSubmit(event) {
    // Previene la página de recargarse al enviar el formulario
    event.preventDefault();
  
    // Obtiene el valor del cuadro de texto
    var input = document.getElementById('input').value;
  
    // Procesa el valor de alguna manera (en este caso, simplemente lo convierte a mayúsculas)
    var result = input.toUpperCase();
  
    // Muestra el resultado en una alerta
    alert(result);
  }


function permite(elEvento, permitidos) {
    // Variables que definen los caracteres permitidos
    var numeros = "0123456789";
    var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var numeros_caracteres = numeros + caracteres;
    var teclas_especiales = [8, 37, 39, 46];
    // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha
  
  
    // Seleccionar los caracteres a partir del parámetro de la función
    switch(permitidos) {
      case 'num':
        permitidos = numeros;
        break;
      case 'car':
        permitidos = caracteres;
        break;
      case 'num_car':
        permitidos = numeros_caracteres;
        break;
    }
  
    // Obtener la tecla pulsada
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    var caracter = String.fromCharCode(codigoCaracter);
  
    // Comprobar si la tecla pulsada es alguna de las teclas especiales
    // (teclas de borrado y flechas horizontales)
    var tecla_especial = false;
    for(var i in teclas_especiales) {
      if(codigoCaracter == teclas_especiales[i]) {
        tecla_especial = true;
        break;
      }
    }
  
    // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
    // o si es una tecla especial
    return permitidos.indexOf(caracter) != -1 || tecla_especial;
  }

//   <input type="text" id="texto" />
// var valor = document.getElementById("texto").value;

// <textarea id="parrafo"></textarea>
// var valor = document.getElementById("parrafo").value;

// console.log(encriptador("felicidades por enfrentar este desafio y haberlo concluido con exito! "))
// console.log(desencriptador("fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!"))
//"gato" => "gaitober"
//fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!
/*salida:
"Scott"
"Negro"
true
5
*/



// Crear función
// Conectar función a su respectivo botón en el HTML
// Capturar el texto escrito en el campo del input del HTML
// Desarrollar la lógica de la encriptación
// Mostrar en la pantalla el resultado del texto encriptado
// Añada un elemento
//----------------------------------------------------------------
// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"