/*
Carregamento do header, nav e footer
*/
$("header").load("../components/header.html");
$("nav").load("../components/nav.html");
$("footer").load("../components/footer.html");


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