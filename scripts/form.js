
//toggle - menu a tendina


let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
    menu.classList.toggle("menu--open");
});

let lastScrollTop = 0;

let menuHidden = document.querySelector(".header");
let arrowDown = document.querySelector(".arrow-down");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        menuHidden.style.top = "-100px";

    } else {
        menuHidden.style.top = "0";

    }

    lastScrollTop = scrollTop;
})


// fa comparire la freccia quando l'header si nasconde

window.addEventListener("scroll", function () {
    if (menuHidden.style.top == "-100px") {
        arrowDown.classList.add("visible");

    } else {
        arrowDown.classList.remove("visible");
    }
})


// se il menu è nascosto e lo "clicki" torna giù

window.addEventListener("click", function () {
    menuHidden.style.top = "0px";
})