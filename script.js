let hamburger_menu = document.getElementById('hamburger-menu');
let big_wrapper = document.getElementById('big-wrapper');


function declare() {
    hamburger_menu = document.querySelector(".hamburger-menu");
    big_wrapper = document.querySelector(".big-wrapper");
}

const main = document.querySelector("main");

declare();


function events() {
    hamburger_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("active");
    });
}

events();