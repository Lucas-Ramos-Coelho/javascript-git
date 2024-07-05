let resultado = document.querySelector("#rangeValue")

let range = document.querySelector("#range")

range.addEventListener("input", function(){
    resultado.innerHTML = range.value
})