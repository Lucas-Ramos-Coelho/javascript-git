// obtém o botão e a imagem do DOM

let img = document.getElementById("imagem");
const btn = document.getElementById("btnMoverImagem");

//variavel para rastrear o estado atual da posição da imagem]
let move = true;

//adiciona um envento de clique ao botão
btn.addEventListener("click", function mover(e) {
  e.preventDefault();
  if (move == true) {
    img.style.left = "1130px";
    img.style.top = "435px"
    move = false;
  } else {
    img.style.left = "0px";
    img.style.top = "50px"
    move = true;
  }
});
