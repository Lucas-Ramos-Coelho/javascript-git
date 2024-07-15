const listaValores = document.querySelector("#listaValores")

//carregar valores na lista
carregarValoresSalvos();

//função para carregar valores na lista
function carregarValoresSalvos() {
    listaValores.innerHTML = ""; //limpa antes de adicionar os valores

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);

        if (chave.startsWith('valorSalvo')) { //filtra as chaves
            const valor = localStorage.getItem(chave);
            const listItem = document.createElement('li');
            listItem.textContent = valor;
            listaValores.appendChild(listItem);
        }
        
    }
}