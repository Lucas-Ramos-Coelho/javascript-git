const campo = document.querySelector("#campo")
const salvar = document.querySelector("#salvar")

//criando um elemento p
const pMensagem = document.createElement("p")

salvar.addEventListener("click", function () {
    const valor = campo.value;

    if (valor.trim() === '') {
        pMensagem.textContent = "Campo obrigatório *";
        campo.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error");
        return;
    }
    
    const chave = `valorSalvo_${Date.now()}`;
    localStorage.setItem(chave, valor)

    campo.value = "";
})