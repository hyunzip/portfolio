$(function () {
      // 리사이징 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function() {
        if ($(window).width() != lastWidth) {
            location.reload(); // 파이어폭스에서 리프레시 안됨
            window.location = window.location; // 리프레시 파이어폭스 브라우저 이슈 해결
            lastWidth = $(window).width();
            return false;
        }
    });

    // --------------------------- Header veags
    $("header").vegas({
        slides: [
            {src: "./img/headerback01.png", delay: 5000},
            {src: "./img/headerback02.png", delay: 5000},
            {src: "./img/headerback03.png", delay: 5000}
        ],
        overlay: './js/vegas/overlays/05.png',
        animation: ['kenburnsDownLeft', 'kenburnsUpLeft', 'kenburnsUp'],
    });

    // --------------------------- mobile nav bt
    $(".Mopen").click(function() {
        $("nav").addClass("on");
    });
    $(".Mclose").click(function() {
        $("nav").removeClass("on");
    });

    // mobile nav slideToggle
    $(".gnb > li > a").click(function() {
        $(this).next().slideToggle(300);
        $(".gnb > li > a").not(this).next().slideUp(300);
        // return false;
    });

 
    // --------------------------- 프로그램 소개 tab
    $(".sec01Box .conBox").hide().eq(0).show();
    $(".sec01Box li").click(function () {
        $('button').removeClass("on");
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).fadeIn(500)
            .siblings('.conBox').fadeOut(100);
    });

    // --------------------------- 공간 소개 tab
    var innerWidth = $(window).width();

    $(".sec02Box li").eq(0).siblings().find(".content").hide();
    $(".sec02Box li .title").click(function () {
        $(".sec02Box li div").removeClass('on');
        $(this).addClass('on');
        // mobile : height toggle
        if (innerWidth < 769) {
            $(this).next().animate({
                height: "toggle",
                width: "none"
            }, "fast", "swing").addClass('on');
            // pc : width toggle
        } else if (innerWidth > 768) {
            $(this).next().animate({
                width: "toggle",
                height: "none"
            }, "fast", "swing").addClass('on');
        }
        $(".sec02Box li .title").not(this).next().hide();
    });

    // --------------------------- pc nav slideup & down
    if (innerWidth > 768) {
        $('.topmenu').mouseover(function () {
            $(this).find('.submenu').stop().slideDown(300);
        }).mouseout(function () {
            $(this).find('.submenu').stop().slideUp(300);
        });
    }
});