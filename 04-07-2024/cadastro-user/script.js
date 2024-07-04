let form = document.querySelector("#cadastroForm");
let cadastroList = document.querySelector("#cadastroList")
//obtem os valores dos campos de entrada
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let cidade = document.querySelector("#cidade")

//adiciona um evento de formulário
form.addEventListener("submit", function(e) {
    //previne o comportamento padrao do navegador
    e.preventDefault();
    //cria um novo item de lista com os valores
    let listItem = document.createElement("li");
    listItem.innerHTML = `<strong>Nome: </strong> ${nome.value}<br><strong>E-mail: </strong> ${email.value}<br><strong>Cidade: </strong> ${cidade.value}`;
    //adiciona o novo item na lista
    cadastroList.appendChild(listItem);
    //limpa os campos de entrada
    form.reset()
})