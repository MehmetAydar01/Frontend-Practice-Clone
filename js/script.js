
/* when twice click the menu, menu open and menu closed */

let buttons = document.querySelector(".hamburger-menu");

let menuNav = document.querySelector(".menuNav");

buttons.addEventListener("click", () => {
    menuNav.classList.toggle("open");
})



