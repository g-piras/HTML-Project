let modal = document.getElementsByClassName('myModal');

// Get the button that opens the modal
let btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close");


// When the user clicks on <span> (x), close the modal
for (let i = 0; i < span.length; i++) {
    span[i].onclick = function () {
        modal[i].style.display = "none";
        document.body.style.overflow = "visible"
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    for (let i = 0; i < modal.length; i++) {
        if (event.target == modal[i]) {
            modal[i].style.display = "none";
            document.body.style.overflow = "visible"
        }
    }

}
// When the user clicks the button, open the modal 



for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        modal[i].style.display = "block";
        document.body.style.overflow = "hidden";
    }
}