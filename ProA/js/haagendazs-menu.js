$(document).ready(function () {
  // ------------------------------ mobile nav open/close
  $(".Mopenbt").click(function () {
    $("div.nav").addClass("on");
  });
  $(".bt .Mclosebt").click(function () {
    $("div.nav").removeClass("on");
  });

  // ------------------------------ pc nav slide/down
  var iw = window.innerWidth;
  if (iw < 768) {

    $(".gnb > li > a").click(function () {
      $(this).next().slideToggle(300);
      $(".gnb > li > a").not(this).next().slideUp(300);
      // return false;
    });
  };

  // ------------------------------ menu category tab
  $(function () {
    $(".tab ul li").click(function () {
      $(this).addClass('on')
        .siblings().removeClass('on');
      $("#" + $(this).data('id')).addClass('on')
        .siblings().removeClass('on')
    });
  });

  // ------------------------------ pint menu img tab
  $(".pint-conbox img").click(function () {
    var tabindex = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(".pint-conbox .ice-infocard").eq(tabindex).addClass('on').siblings().removeClass('on');
  });

  // ------------------------------ mini menu img tab
  $(".mini-conbox img").click(function () {
    var tabindex = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(".mini-conbox .ice-infocard").eq(tabindex).addClass('on').siblings().removeClass('on');
  });

  // ------------------------------ bar menu img tab
  $(".bar-conbox img").click(function () {
    var tabindex = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(".bar-conbox .ice-infocard").eq(tabindex).addClass('on').siblings().removeClass('on');
  });

  // ------------------------------ bulk menu img tab
  $(".bulk-conbox img").click(function () {
    var tabindex = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(".bulk-conbox .ice-infocard").eq(tabindex).addClass('on').siblings().removeClass('on');
  });
});