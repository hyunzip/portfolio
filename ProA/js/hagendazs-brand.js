
$(document).ready(function () {
$(".Mopenbt").click(function () {
  $("div.nav").addClass("on");
});
$(".bt .Mclosebt").click(function () {
  $("div.nav").removeClass("on");
});

var iw = window.innerWidth;
  if (iw < 768) {

    $(".gnb > li > a").click(function () {
      $(this).next().slideToggle(300);
      $(".gnb > li > a").not(this).next().slideUp(300);
      // return false;
    });
  };
});

// Swiper slide
// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: true,
//   },
// });

$('.swiper.mySwiper .swiper-wrapper').slick({
  infinite: true,
  dots: true
})