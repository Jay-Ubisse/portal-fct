//carregamento do header, nav e footer
$("header").load("./pages/components/header.html");
$("nav").load("./pages/components/nav.html");
$("footer").load("./pages/components/footer.html");


/* Animacao da seccao noticias */
$("#news").hide();

$("#news").slideDown(800, function () {
    $("aside").animate(
        {
            right: "0"
        },
        1000,
        'easeOutBounce',
    );
});


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


/**Codigo para o menu (versao mobile) */

if ($(window).width() < 768) {
    $("#nav").hide();
    $("#menu-icon").click(function () {
        if ($("#nav").is(':hidden')) {
            $("#nav").slideDown(300);
        } else {
            $("#nav").slideUp(300);
        }
    });

    $(".dropdown ul").hide();
    $(".dropdown").click(function () {
        let $drop = $(this).children('ul');
        if ($drop.is(':hidden')) {
            $drop.slideDown(300);
        } else {
            $drop.slideUp(300);
        }
    });

    $(".submenu").show();

}