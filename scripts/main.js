/**
 * @file main.js
 * @author: Giampietro Piras, Davide Murroni, Eloise Bryony Giorda, Federico Luciano Stroppiana, Francesco Abrate
 */


//toggle - dropdown menu

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
    menu.classList.toggle("menu--open");
});




// Hide menu on scroll

let lastScrollTop = 0;

let menuHidden = document.querySelector(".header");


window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        menuHidden.style.top = "-100px";
        
    } else {
        menuHidden.style.top = "0";
        
    }

    lastScrollTop = scrollTop;
});



// Show littel arrow when menu is hidden

let arrowDown = document.querySelector(".arrow-down");

window.addEventListener("scroll", function () {
    if (menuHidden.style.top == "-100px") {
        arrowDown.classList.add("visible");

    } else {
        arrowDown.classList.remove("visible");
    }
});




// If menu is hidden just click in every part of the page and menu will drop down again

window.addEventListener("click", function () {
    menuHidden.style.top = "0px";
});

















