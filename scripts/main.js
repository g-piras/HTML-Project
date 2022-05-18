//momentaneamente il menu a tendina si apre tramite jQuery, da rifare usando javascript

$(document).ready(function () {  //indica a jQuery di esequire il codice all'interno quando il documento è pronto 
    /* Open Panel */
    $(".hamburger").on('click', function () {
        $(".menu").toggleClass("menu--open");
    });
});