let ativa = document.querySelector(".ativa");
let para = document.querySelector(".para");

function ativar() {
  tempo = setInterval(function () {
    var cronometro = document.querySelector("p.num").innerHTML;
    var soma = parseInt(cronometro) + 1;
    document.querySelector("p.num").innerHTML = soma;
  }, 1000);

  ativa.style.display = "none";
  para.style.display = "block";
}

function parar() {
  clearInterval(tempo);
  ativa.style.display = "block";
  para.style.display = "none";
}

function reset() {
  document.querySelector("p.num").innerHTML = 0;
  parar();

  ativa.style.display = "block";
  para.style.display = "none";
}
