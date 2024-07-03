//obtém os botões do DOM 
let btnMudarCor = document.getElementById("btnMudarCor");
let btnVoltarCor = document.getElementById("btnVoltarCor");

//adiciona um evento de clique ao botão 'Mudar cor de fundo'

btnMudarCor.addEventListener("click", function(){
    document.body.style.backgroundColor = "#3c3c3c";
})

btnVoltarCor.addEventListener("click", function() {
    document.body.style.backgroundColor = "#fff";
})
let verifica = true;
btnUnico.addEventListener("click", function clicar() {
    if (verifica == true) {
        document.body.style.backgroundColor = "#3c3c3c"; 
        verifica=false;
    }else{
        document.body.style.backgroundColor = "#fff";
        verifica=true;
    }
})
