function getEncode() {
  let texto = document.getElementById("texto").value;
  let deslocamento = parseInt(document.getElementById("deslocamento").value);

  document.getElementById("textoCifrado").value = encode(texto, deslocamento);
}

function getDecode() {
  let texto = document.getElementById("texto").value;
  let deslocamento = parseInt(document.getElementById("deslocamento").value);

  document.getElementById("textoCifrado").value = decode(texto, deslocamento);
}

function encode(texto, deslocamento) {

  let codCharcode = [];
  var textocifrado = "";
  var aux = [];

  for (let i = 0; i < texto.length; i++) {
    codCharcode.push(texto.charCodeAt(i));
  }

  for (var j = 0; j < texto.length; j++) {
    if (codCharcode[j] >= 65 && codCharcode[j] <= 90) {
      aux[j] = (((codCharcode[j] - 65) + deslocamento) % 26) + 65;
      //console.log(aux[j]); 
    } else if (codCharcode[j] >= 97 &&  codCharcode[j] <= 122) {
      aux[j] = (((codCharcode[j] - 97) + deslocamento) % 26) + 97;
      //console.log(aux[j]); 
    } else {
      aux[j] = codCharcode[j];
    }
    textocifrado += String.fromCharCode(aux[j]);
  }
  return textocifrado;
}

function decode(texto, deslocamento) {
  var textocifrado = "";
  var codCharcode = [];
  var aux = [];

  for (var i = 0; i < texto.length; i++) {
    codCharcode.push(texto.charCodeAt(i));
  }

  for (var j = 0; j < texto.length; j++) {

    if (codCharcode[j] >= 65 && codCharcode[j] <= 90) {
      aux[j] = (((codCharcode[j] - 90) - deslocamento) % 26) + 90;
      //console.log(aux[j]); 
    } else if (codCharcode[j] >= 97 && codCharcode[j] <= 122) {
      aux[j] = (((codCharcode[j] - 122) - deslocamento) % 26) + 122;
      //console.log(aux[j]); 
    } else {
      aux[j] = codCharcode[j];
    }
    textocifrado += String.fromCharCode(aux[j]);
  }
  return textocifrado;
} 
