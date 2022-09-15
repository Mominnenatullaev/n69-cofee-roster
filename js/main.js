var elContent = document.querySelector(".js__content")
var elList = document.querySelector(".sublist")
var elImg = document.querySelector(".js__img")

elContent.addEventListener("click", function (){
    elList.classList.toggle("is-open")
    elImg.classList.toggle("rotate-please")
})