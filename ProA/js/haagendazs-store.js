$(document).ready(function () {

  var lastWidth = $(window).width();
  $(window).resize(function () {
    if ($(window).width() != lastWidth) {
      location.reload();
      lastWidth = $(window).width();
      return false;
    }
  });

  $(".store-bt").hover(function () {
    $(this).siblings(".seoul-store").toggleClass('on')
  });
  $(".store-bt").hover(function () {
    $(this).siblings(".gyeonggi-store").toggleClass('on')
  });
  $(".store-bt").hover(function () {
    $(this).siblings(".busandaegu-store").toggleClass('on')
  });
  $(".store-bt").hover(function () {
    $(this).siblings(".ysanjeju-store").toggleClass('on')
  });

  $(function () {
    $(".tab ul li").click(function () {
      $(this).addClass('on')
        .siblings().removeClass('on');
      $("#" + $(this).data('id')).addClass('on')
        .siblings().removeClass('on');
      storeSwiper();
    });
  });

  $(".Mopenbt").click(function () {
    $("div.nav").addClass("on");
  });
  $(".bt .Mclosebt").click(function () {
    $("div.nav").removeClass("on");
  });

  // ---------------------------- IE Map click event
  $('.gyodae').click(function(){
    window.open('https://www.google.com/maps/place/%ED%95%98%EA%B2%90%EB%8B%A4%EC%A6%88+%EA%B5%90%EB%8C%80%EC%A0%90/@37.498155,127.013153,15z/data=!4m5!3m4!1s0x0:0x9895d041bacb49cd!8m2!3d37.4981551!4d127.0131528?hl=ko')
  })
  
  $('.yeoido').click(function(){
    window.open('https://www.google.com/maps/place/%ED%95%98%EA%B2%90%EB%8B%A4%EC%A6%88+%EC%97%AC%EC%9D%98%EB%8F%84%EC%A0%90/@37.521009,126.924172,15z/data=!4m5!3m4!1s0x0:0xcd00a0fba097c116!8m2!3d37.5210088!4d126.9241724?hl=ko2')
  })
  
  $('.seocho').click(function(){
    window.open('https://www.google.com/maps/place/%EB%A7%88%EC%A0%9C%EC%8A%A4%ED%83%80%EC%8B%9C%ED%8B%B0%ED%83%80%EC%9B%8C1/@37.4904799,127.0053521,19z/data=!4m9!1m2!2m1!1z66eI7KCc7Iqk7YOA7Iuc7YuwIDHsuLU!3m5!1s0x357ca14583e88649:0x156dbac3f9abb50d!8m2!3d37.490866!4d127.0056646!15sChfrp4jsoJzsiqTtg4Dsi5zti7AgMey4tZIBEGNvcnBvcmF0ZV9vZmZpY2U?hl=ko')
  })
  
  $('.bundang').click(function(){
    window.open('https://www.google.com/maps/place/%ED%95%98%EA%B2%90%EB%8B%A4%EC%A6%88+%EB%B6%84%EB%8B%B9%EB%AF%B8%EA%B8%88%EC%A0%90/@37.350314,127.106685,13z/data=!4m5!3m4!1s0x0:0x22eea8d257ea3ab1!8m2!3d37.3503135!4d127.1066853?hl=ko')
  })
  
  $('.ajuhospital').click(function(){
    window.open('https://www.google.com/maps/place/%ED%95%98%EA%B2%90%EB%8B%A4%EC%A6%88+%EC%95%84%EC%A3%BC%EB%8C%80%EB%B3%91%EC%9B%90%EC%A0%90/@37.279532,127.047741,16z/data=!4m5!3m4!1s0x0:0x13e1e3f8b960c46a!8m2!3d37.2795318!4d127.0477406?hl=ko')
  })

  $('.pangyo').click(function(){
    window.open('https://www.google.com/maps/place/%ED%95%98%EA%B2%90%EB%8B%A4%EC%A6%88+%ED%8C%90%EA%B5%90%EC%A0%90/@37.394222,127.111995,11z/data=!4m5!3m4!1s0x0:0x7b9996f063ee0b50!8m2!3d37.3942222!4d127.1119951?hl=ko')
  })

  $('.marincity').click(function(){
    window.open('https://www.google.com/maps/place/%ED%95%98%EA%B2%90%EB%8B%A4%EC%A6%88+%EB%B6%80%EC%82%B0%EB%A7%88%EB%A6%B0%EC%8B%9C%ED%8B%B0%EC%A0%90/@35.155077,129.14228,14z/data=!4m5!3m4!1s0x0:0x31227a795cdc4567!8m2!3d35.1550772!4d129.1422796?hl=ko')
  })

  $('.yongho').click(function(){
    window.open('https://www.google.com/maps/place/%ED%95%98%EA%B2%90%EB%8B%A4%EC%A6%88+%EB%B6%80%EC%82%B0+%EC%9A%A9%ED%98%B8+%EC%9E%90%EC%9D%B4%EC%A0%90/@35.131837,129.110663,14z/data=!4m5!3m4!1s0x0:0x879218cdded7c2b4!8m2!3d35.1318374!4d129.1106626?hl=ko')
  })

  $('.daegu').click(function(){
    window.open('https://www.google.com/maps/place/%ED%95%98%EA%B2%90%EB%8B%A4%EC%A6%88+%EB%8C%80%EA%B5%AC%EC%8B%A0%EC%84%B8%EA%B3%84%EC%A0%90/@35.877812,128.628453,16z/data=!4m5!3m4!1s0x0:0x822c9125a206edf6!8m2!3d35.8778124!4d128.6284527?hl=ko')
  })

  $('.yangsan').click(function(){
    window.open('https://www.google.com/maps/place/%ED%95%98%EA%B2%90%EB%8B%A4%EC%A6%88+%EC%96%91%EC%82%B0%EC%A0%90/@35.329775,129.012894,16z/data=!4m5!3m4!1s0x0:0x8f05f65b916529a3!8m2!3d35.3297746!4d129.0128937?hl=ko')
  })

  $('.jeju').click(function(){
    window.open('https://www.google.com/maps/place/%ED%95%98%EA%B2%90%EB%8B%A4%EC%A6%88%EC%A0%9C%EC%A3%BC/@33.488025,126.445383,15z/data=!4m5!3m4!1s0x0:0xa2c1790226ecd9ff!8m2!3d33.4880254!4d126.4453833?hl=ko')
  })
});

var iw = window.innerWidth;
if (iw < 640) {
  function storeSwiper (){
    new Swiper('.swiper.storeSwiper', {
      infinite: true,
      observer: true,
      observeParents: true,
      autoplay: true
    });
  }
  storeSwiper();

  $(".gnb > li > a").click(function () {
    $(this).next().slideToggle(300);
    $(".gnb > li > a").not(this).next().slideUp(300);
    // return false;
  });
};