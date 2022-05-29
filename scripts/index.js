/**
 * @file main.js
 * @author: Giampietro Piras, Davide Murroni, Eloise Bryony Giorda, Federico Luciano Stroppiana, Francesco Abrate
 */



//click arrow to scroll down by 600px

let arrow = document.querySelector(".bottom-arrow");
arrow.addEventListener("click", function () {
    window.scrollTo(0, 600);
});




/**
 * Showing contents while scrolling the page
 * @param {*} querySel 
 * @param {*} screenHeight 
 */

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

