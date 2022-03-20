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

    // --------------------------- nav
    // --------------------------- pc nav slideup & down
    var innerWidth = $(window).width();
    if (innerWidth > 769) {
        $('.topmenu').mouseover(function () {
            $(this).find('.submenu').stop().slideDown(300);
        }).mouseout(function () {
            $(this).find('.submenu').stop().slideUp(300);
        });

        // --------------------------- 이미지맵 모달
    $("area").each(function () {
        $(this).click(function () {
            $(".modalBox .box").eq($(this).index()).addClass("on").siblings().removeClass("on");
            $(".modalBox").addClass("active");
            return false;
        })
    });

    $(".box .close").click(function() {
        $(".box").removeClass('on');
        $(".modalBox").removeClass('active');
    });
    } else if (innerWidth < 769) {
        $(".mapinner img").click(function() {
            window.open("./img/place.pdf");
        })
    }

    // --------------------------- mobile nav bt
    $(".Mopen").click(function() {
        $("nav").addClass("on");
    });
    $(".Mclose").click(function() {
        $("nav").removeClass("on");
    });

    // --------------------------- mobile nav slideToggle
    $(".gnb > li > a").click(function() {
        $(this).next().slideToggle(300);
        $(".gnb > li > a").not(this).next().slideUp(300);
        // return false;
    });


    // --------------------------- table tab
    $(".tab ul li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });
});