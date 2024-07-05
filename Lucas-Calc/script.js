var resultado = document.getElementById("resultado");
const soma = document.getElementById("btnSoma");
const multiplicacao = document.getElementById("btnMultiplicacao");
const divisao = document.getElementById("btnDivisao");
const subtracao = document.getElementById("btnSubtracao");
const igual = document.getElementById("btnIgual");
const limpar = document.getElementById("btnClear");

//criando os botões para aparecer o valor no display
const sete = document.querySelector("#btn7");
sete.addEventListener("click", function (e) {
  e.preventDefault();
  if (resultado.innerHTML.length < 12) {
    resultado.innerHTML += "7";
    operadorInserido = false;
  }
});

const oito = document.querySelector("#btn8");
oito.addEventListener("click", function (e) {
  e.preventDefault();
  if (resultado.innerHTML.length < 12) {
    resultado.innerHTML += "8";
    operadorInserido = false;
  }
});

const nove = document.querySelector("#btn9");
nove.addEventListener("click", function (e) {
  e.preventDefault();
  if (resultado.innerHTML.length < 12) {
    resultado.innerHTML += "9";
    operadorInserido = false;
  }
});

const quatro = document.querySelector("#btn4");
quatro.addEventListener("click", function (e) {
  e.preventDefault();
  if (resultado.innerHTML.length < 12) {
    resultado.innerHTML += "4";
    operadorInserido = false;
  }
});

const cinco = document.querySelector("#btn5");
cinco.addEventListener("click", function (e) {
  e.preventDefault();
  if (resultado.innerHTML.length < 12) {
    resultado.innerHTML += "5";
    operadorInserido = false;
  }
});

const seis = document.querySelector("#btn6");
seis.addEventListener("click", function (e) {
  e.preventDefault();
  if (resultado.innerHTML.length < 12) {
    resultado.innerHTML += "6";
    operadorInserido = false;
  }
});

const um = document.querySelector("#btn1");
um.addEventListener("click", function (e) {
  e.preventDefault();
  if (resultado.innerHTML.length < 12) {
    resultado.innerHTML += "1";
    operadorInserido = false;
  }
});

const dois = document.querySelector("#btn2");
dois.addEventListener("click", function (e) {
  e.preventDefault();
  if (resultado.innerHTML.length < 12) {
    resultado.innerHTML += "2";
    operadorInserido = false;
  }
});

const tres = document.querySelector("#btn3");
tres.addEventListener("click", function (e) {
  e.preventDefault();
  if (resultado.innerHTML.length < 12) {
    resultado.innerHTML += "3";
    operadorInserido = false;
  }
});

const zero = document.querySelector("#btn0");
zero.addEventListener("click", function (e) {
  e.preventDefault();
  if (resultado.innerHTML.length < 12) {
    resultado.innerHTML += "0";
    operadorInserido = false;
  }
});

//inicio dos operadores
//impedir que mais de 1 operador seja inserido por vez
let operadorInserido = false;

//operadores
limpar.addEventListener("click", function (e) {
  e.preventDefault();
  resultado.innerHTML = "";
});

subtracao.addEventListener("click", function (e) {
  e.preventDefault();
  if (!operadorInserido && resultado.innerHTML.length < 12) {
    resultado.innerHTML += "-";
    operadorInserido = true;
  }
});

soma.addEventListener("click", function (e) {
  e.preventDefault();
  if (!operadorInserido && resultado.innerHTML.length < 12) {
    resultado.innerHTML += "+";
    operadorInserido = true;
  }
});

divisao.addEventListener("click", function (e) {
  e.preventDefault();
  if (!operadorInserido && resultado.innerHTML.length < 12) {
    resultado.innerHTML += "/";
    operadorInserido = true;
  }
});

multiplicacao.addEventListener("click", function (e) {
  e.preventDefault();
  if (!operadorInserido && resultado.innerHTML.length < 12) {
    resultado.innerHTML += "*";
    operadorInserido = true;
  }
});

igual.addEventListener("click", function (e) {
  e.preventDefault();
  resultado.innerHTML = eval(resultado.innerHTML);
});
