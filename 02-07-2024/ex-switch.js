
document.getElementById("clicar").addEventListener("click",function(e){
    e.preventDefault();
    var drinkType = document.getElementById("escolha");
    var drinkName = parseInt(drinkType);
    switch (drinkName) {
        case 1:
            document.write("Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.");
            break;
        case 2:
            document.write("Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.")
            break;
        case 3:
            document.write("Bedida produzida do líquido extraído de frutos.");
            break;
        default:
            alert("Não foi possível identificar o tipo de bebida.");
            break;
    }
})
