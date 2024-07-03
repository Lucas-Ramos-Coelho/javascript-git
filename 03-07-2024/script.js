//obtém o elemnto do DOM com o ID  'idNome'
let nome = document.getElementById("idNome");
let cidade = document.getElementById("idCidade")

function mudar(event) {
    //previne o comportamento padrão do evento, como o envio de um formulário
    event.preventDefault();
    document.getElementById("titulo").innerHTML = nome.value;
    nome.value = ""
}

function mudar2(event) {
    event.preventDefault();
    document.getElementById("titulo2").innerHTML = cidade.value;
    cidade.value = ""
}