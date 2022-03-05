$(document).ready(function () {
  // ------------------------------- 리사이징 새로고침
  var lastWidth = $(window).width();
  $(window).resize(function () {
    if ($(window).width() != lastWidth) {
      location.reload();
      lastWidth = $(window).width();
      return false;
    }
  });

  // -------------------------------스크롤 시 헤더 디자인 변경
  $(document).scroll(function () {
    if ( iw > 640 ) {
      var scroll = $(window).scrollTop();
      if (scroll > 30) {
        $(".sec01top").addClass("on");
      } else if (scroll < 99) {
        $(".sec01top").removeClass("on");
      }
    }
  });

  // ------------------------------- mobile nav open/close
  $(".Mopenbt").click(function () {
    $("div.nav").addClass("on");
  });
  $(".bt .Mclosebt").click(function () {
    $("div.nav").removeClass("on");
  });

  //------------------------------- pc nav slide up/down
  var iw = window.innerWidth;
  if (iw < 768) {

    $(".gnb > li > a").click(function () {
      $(this).next().slideToggle(300);
      $(".gnb > li > a").not(this).next().slideUp(300);
      // return false;
    });
  };
});

// ------------------------------- Haagendazs Flavor Slide Swiper
// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: true,
//   },
// });

// ------------------------------- Best Flavor Slide Swiper
// var swiper = new Swiper(".bestSwiper", {
//   autoplay: {
//     delay: 2800,
//   },
//   loop: true,
// });

// slick slide
$('.swiper.mySwiper .swiper-wrapper').slick({
  infinite: true,
  dots: true
})

$('.swiper.bestSwiper .swiper-wrapper').slick({
  infinite: true,
  autoplay: true
})
