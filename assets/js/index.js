$(document).ready(function () {
    $("#news").hide();

        $("#news").slideDown(800, function() {
        $("aside").animate(
            {
            right: "0"
        },
        1000,
        'easeOutBounce',
        );
        });
      
}); // end ready

/**Codigo para o slide show */

let slideIndex = 1;
let n;

var timeout = 4000;
var showSlides = function () {
    slideIndex += 1;
    n = slideIndex;
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
setInterval(showSlides, timeout);