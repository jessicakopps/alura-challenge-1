var textoDigitado = document.querySelector("#input-texto");
var resultado = document.querySelector("#msg");
var cripto = document.querySelector("#btn-cripto");
var descripto = document.querySelector("#btn-descripto");
var copiar = document.querySelector("#btn-copy");

//preventDefault = ir para uma URL definida, se n definiu, vai para ela mesma
cripto.addEventListener("click", function (event) {
  event.preventDefault();
});

descripto.addEventListener("click", function (event) {
  event.preventDefault();
});


function validadorTexto(texto) {
  const caractEsp = /^[a-z\s]+$/i;
  var textoValidado = true;

  if (texto.length == 0) {
    alert("Escreva uma mensagem");
    textoValidado = false;
  } else {
    if (!texto || !texto.match(caractEsp)) {
      alert("Texto não deve conter acentos ou caracteres especiais.");
      textoValidado = false;
    }
  }
  return textoValidado;
}

function criptografar() {
  var texto = textoDigitado.value.toLowerCase();

  var letrasOriginais = [/e/g, /i/g, /a/g, /o/g, /u/g];
  var substituir = ["enter", "imes", "ai", "ober", "ufat"];

  validadorTexto(texto);
  if ((textoValidado = true)) {
    for (var i = 0; i < letrasOriginais.length; i++) {
      var textoCripto = texto.replace(letrasOriginais[i], substituir[i]);
      texto = textoCripto;
    }
    resultado.value = texto;
  } else {
    resultado.value = "";
  }
}

function descriptografar() {
  var texto = textoDigitado.value.toLowerCase();

  var substituir = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g];
  var letrasOriginais = ["e", "i", "a", "o", "u"];

  validadorTexto(texto);

  if ((textoValidado = true)) {
    for (var i = 0; i < letrasOriginais.length; i++) {
      var textoDescripto = texto.replace(substituir[i], letrasOriginais[i]);
      texto = textoDescripto;
    }
    resultado.value = texto;
  } else {
    resultado.value = "";
  }
}

function copiarTexto() {
  var textoCopiado = document.getElementById("msg");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

cripto.onclick = criptografar;

descripto.onclick = descriptografar;

copiar.onclick = copiarTexto;
