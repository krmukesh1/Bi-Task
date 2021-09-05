const navLinks= document.querySelector("#navLinks")
const openMenu = document.querySelector("#open")
const closedMenu = document.querySelector("#closed")

function menuOpen(){
    navLinks.style.right="0"
}
function menuClosed(){
    navLinks.style.right ="-200px"
}

openMenu.addEventListener("click", menuOpen)
closedMenu.addEventListener("click", menuClosed)