const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");

button.addEventListener("click", function(){
    popup.classList.add("d-block");
})
popup.addEventListener("click", function(e){
    const classListClick = e.target.classList[0];
    const classNameArray = ["popup-close", "popup-link", "popup-wrapper"];
    const isClassList = classNameArray.includes(classListClick);

    if (isClassList) {
        popup.classList.remove("d-block")
    }
})