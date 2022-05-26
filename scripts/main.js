
//toggle - menu a tendina




let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
    menu.classList.toggle("menu--open");
});



//click arrow to scroll down by 508px

let arrow = document.querySelector(".bottom-arrow");
arrow.addEventListener("click", function () {
    window.scrollTo(0, 600);
});



//scroll


function onScroll(querySel, screenHeight) {
    let target = document.querySelector(querySel);
    let targetPosition = target.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / screenHeight;

    if (targetPosition < screenPosition) {
        target.classList.add("active");
    } else {
        target.classList.remove("active");
    }
}



window.addEventListener("scroll", function () {
    onScroll(".intro-title", 1.2);
    onScroll(".content-teaser-img", 1.3);
    onScroll(".artOne", .95);
    
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
})












