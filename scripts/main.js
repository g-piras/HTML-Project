<<<<<<< HEAD

//toggle - menu a tendina

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
    menu.classList.toggle("menu--open");
})
=======
//momentaneamente il menu a tendina si apre tramite jQuery, da rifare usando javascript
$(document).ready(function () {  //indica a jQuery di esequire il codice all'interno quando il documento è pronto 
    /* Open Panel */
    $(".hamburger").on('click', function () {
        $(".menu").toggleClass("menu--open");
    });
});
>>>>>>> 52cc230e3984cc7c1ea0e6fe4fce2a639f4f5992
