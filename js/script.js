//menu sticky

Window.onscroll=() => stickyMenu();

let header = document.getElementById("header");
let sticky = header.offsetTop;

stickyMenu = () =>(window.pageXOffset >sticky)
? header.classList.add("sticky")
:header.classList.remove("sticky");

// show/hide menu mobil version
let showMenu = false;
const menuMain = document.getElementById("menu");
const btnmenuToggle = document.getElementById("btn-menu-toggle");

let actionMenu = () =>{
    if(showMenu){
        menuMain.classList.remove("show");
        showMenu = false;

    }else{
        menuMain.classList.add("show");
        showMenu = true;
    }
}
btnmenuToggle.addEventListener("click", actionMenu);