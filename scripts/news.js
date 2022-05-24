
//toggle - menu a tendina


let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
    menu.classList.toggle("menu--open");
});

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
})


