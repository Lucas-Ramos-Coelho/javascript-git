const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

//criando uma função
button.addEventListener("click", function(event){
    event.preventDefault();
    console.log(inputNota.value);
    

    //lógica
    if(inputNota.value >= 6){
        alert("Você está aprovado")
    }else{
        alert("Você está reprovado")
    }
})