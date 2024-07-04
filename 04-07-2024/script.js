//obtem os elementos do DOM 
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

//botões
const btnSomar = document.getElementById("btnSomar");
var resultado = document.getElementById("resultado");

//adiciona um evento de clique no botão

btnSomar.addEventListener("click", function(e) {
    e.preventDefault();
    let soma = Number(valor1.value) + Number(valor2.value);

    //exibe o resultado na tela
    resultado.textContent = soma;
})

btnSubtrair.addEventListener("click", function(e) {
    e.preventDefault();
    let subtracao = Number(valor1.value) - Number(valor2.value);

    //exibe resultado na tela
    resultado.textContent = subtracao;
})

btnMultiplicar.addEventListener("click", function (e) {
    e.preventDefault();
    let multiplicacao = Number(valor1.value) * Number(valor2.value);

    //exibe o valor na tela
    resultado.textContent = multiplicacao;
})

btnDividir.addEventListener("click", function (e) {
    e.preventDefault();
    let divisao = Number(valor1.value) / Number(valor2.value);

    //exibe o resultado na tela
    resultado.textContent = divisao;
})

btnClear.addEventListener("click", function (e) {
    e.preventDefault();
    valor1.value = "";
    valor2.value = "";
    resultado.textContent = "";
})