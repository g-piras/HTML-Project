
//toggle - menu a tendina

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
    menu.classList.toggle("menu--open");
});



//click arrow to scroll down by 508px

let arrow = document.querySelector(".bottom-arrow");
arrow.addEventListener("click", function () {
    window.scrollTo(0, 508);
});




//scroll


window.addEventListener("scroll",function(){

    let introTitle = document.querySelector(".intro-title");
    let introPosition = introTitle.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.7;

    if(introPosition < screenPosition){
        introTitle.classList.add("active");
    }else{
        introTitle.classList.remove("active");
    }
});

window.addEventListener("scroll", function () {

    let introTitle = document.querySelector(".intro-title");
    let introPosition = introTitle.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.5;

    if (introPosition < screenPosition) {
        introTitle.classList.add("active");
    } else {
        introTitle.classList.remove("active");
    }
});

window.addEventListener("scroll", function () {

    let valorantImgOne = document.querySelector(".content-teaser-img");
    let imgOnePosition = valorantImgOne.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /1.2;

    if (imgOnePosition < screenPosition) {
        valorantImgOne.classList.add("active");
    } else {
        valorantImgOne.classList.remove("active");
    }
});

window.addEventListener("scroll", function () {

    let contentArticleOne = document.querySelector(".content-article");
    let contentPositionOne = contentArticleOne.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/0.777;

    if (contentPositionOne < screenPosition) {
        contentArticleOne.classList.add("active");
    } else {
        contentArticleOne.classList.remove("active");
    }
});







