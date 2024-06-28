const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

//criando uma função para limpar o campo
function clearForm() {
    inputNota.value = "";
} 

//criando uma função
button.addEventListener("click", function(event){
    event.preventDefault();
    const value = inputNota.value;

    //validação de formulário
    if(value === ""){ //(===) significa exatamente igual
        alert("Campo obrigatório");
        return false;
    }
    
    //lógica
    if(value >= 6){
        alert("Você está aprovado")
    }else{
        alert("Você está reprovado")
    }

    //chamando função de limpar campo
    clearForm();
})  