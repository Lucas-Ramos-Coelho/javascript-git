const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

// Event listener para enviar o formulário ao pressionar "Enter"
inputNota.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        
        // Copie aqui a lógica do botão para validar e exibir a mensagem
        let nota = parseFloat(inputNota.value);
        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            console.log(nota);
            
            if (nota >= 6) {
                alert("Você está aprovado");
            } else {
                alert("Você está reprovado");
            }
        } else {
            alert("Por favor, insira uma nota válida entre 0 e 10.");
        }
    }
});
