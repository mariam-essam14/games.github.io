import { getDataGames, getType } from "./game.module.js"
getDataGames("mmorpg")

 getType()


$(".nav-link").click(function(){
    $(this).addClass("active")
    $(this).parent().siblings().children().removeClass("active")
})

var closeEl =document.querySelector("#close")

closeEl.addEventListener("click",closeFun)
function closeFun(){
    document.querySelector(".Games").classList.remove("d-none");
    document.querySelector(".details").classList.add("d-none");
}