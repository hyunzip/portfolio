$(function() {
    // 리사이징 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function() {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });

    var innerWidth = $(window).width();
    if (innerWidth > 767) {
        $('.topmenu').mouseover(function () {
            $(this).find('.submenu').stop().slideDown(300);
        }).mouseout(function () {
            $(this).find('.submenu').stop().slideUp(300);
        });
    }

    // --------------------------- nav

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

    // --------------------------- 스타트업 입주 지원 영역 탭
    $(".spBox ul li").click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });

    // --------------------------- 사이드 퀵 메뉴
    $(".side-quikmenu li").each(function() {

        $(this).click(function(e) {
            var thisOffset = $("." + $(this).data('id')).offset().top;
            $("html, body").animate({
                scrollTop: thisOffset
            }, 2500);
            $(".side-quikmenu li").removeClass("on");
            $(this).addClass('on');
            e.stopPropagation();
        });
    });

    // --------------------------- 모바일 사이드 퀵 메뉴 슬라이드
    if ($(window).width() < 768) {
        $(".side-quikmenu ul li > ul").hide();
        $(".side-quikmenu > ul li").click(function() {
            $(this).children("ul").slideToggle(800);
            $(".side-quikmenu > ul li").not(this).children("ul").slideUp(800);
        });
    }

});

$(document).scroll(function() {
    // 스크롤 내릴 시 사이드 퀵 메뉴 위치 이동
    var sub01sectionOffset = $(".sub01section").offset().top; //230
    var scroll = $(window).scrollTop();
    if (scroll > sub01sectionOffset) {
        $(".side-quikmenu").addClass("scroll");
    } else if (scroll < sub01sectionOffset) {
        $(".side-quikmenu").removeClass("scroll");
    }
    $("div.quik").each(function() {
        if (scroll >= $(this).offset().top) {
            $(".side-quikmenu li").removeClass("on");
            $(".side-quikmenu li[data-id=" + $(this).attr('class').split(' ')[1] + "]").addClass('on').parents("li").addClass('on');
        }
    });

});