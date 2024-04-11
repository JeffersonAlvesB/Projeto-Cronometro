function ativar() {
  tempo = setInterval(function () {
    var conometro = document.querySelector("p.num").innerHTML;
    var soma = parseInt(conometro) + 1;
    document.querySelector("p.num").innerHTML = soma;
  }, 1000);
}

function parar() {
  clearInterval(tempo);
}

function reset() {
  document.querySelector("p.num").innerHTML = 0;
  parar();
}
