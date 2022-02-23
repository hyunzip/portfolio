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

     // --------------------------- mobile nav open/close button
     $(".Mopen").click(function() {
        $("nav").addClass("on");
    });
    $(".Mclose").click(function() {
        $("nav").removeClass("on");
    });

    $(".openMenu").click(function() {
        $(".sitemap").addClass("on");
    });
    $(".closeMenu").click(function() {
        $(".sitemap").removeClass("on");
    });

    // --------------------------- mobile nav slideToggle
    $(".dep01 > li > a").click(function() {
        $(this).next().slideToggle(300);
        $(".dep01 > li > a").not(this).next().slideUp(300);
        return false;
    });
    
    // -------------------------------- 캘린더 
    $(".datepicker").datepicker({
        dateFormat:'yymmdd',
        monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dayNamesMin:['일','월','화','수','목','금','토'],
        changeMonth:true, // 월변경가능
        changeYear:true,  // 년변경가능
        showMonthAfterYear:true // 년 뒤에 월표시
    });

    // -------------------------------- cobBox01 slide Slick
    if (innerWidth > 767) {
        $('.slide').slick({
            slidesToShow: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2500,
        });
    } else if(innerWidth < 640) {
        $('.slide').slick({
            slidesToShow: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2500,
        });
        $('.slide01').attr("src", "images/slide01m.png");
        $('.slide02').attr("src", "images/slide02m.png");
        $('.slide03').attr("src", "images/slide03m.png");
        $('.slide04').attr("src", "images/slide04m.png");
        $('.slide05').attr("src", "images/slide05m.png");
        $('.slide06').attr("src", "images/slide06m.png");
    }

    // -------------------------------- 공지사항 목록 말줄임
    $(".noticeBox ul li > a").each(function () {
        
        $(this).each(function () {
            if(innerWidth > 767) {
                var length = 31;

            if ($(this).text().length >= length) {
                $(this).text($(this).text().substr(31, length) + '..');
            }
        } else if (innerWidth < 640) { // 모바일 말줄임
            var length = 25;
            if ($(this).text().length >= length) {
                $(this).text($(this).text().substr(25, length) + '..');
            }
        }
        });
    });

    // -------------------------------- 보도자료 타이틀 말줄임
    $('h4.nTitle').each(function () {
        var length = 65;
    
        $(this).each(function () {
            if ($(this).text().length >= length) {
                $(this).text($(this).text().substr(0, length) + '..');
            }
        });
    });
    
    // -------------------------------- 보도자료 텍스트 말줄임
    $('p.news').each(function () {
        var length = 98;
    
        $(this).each(function () {
            if ($(this).text().length >= length) {
                $(this).text($(this).text().substr(0, length) + '..');
            }
        });
    });

      // -------------------------------- 교육자료 tab
    $(".tab ul li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });

    // --------------------------------교육자료 reservationInfo 텍스트 말줄임
    $('p.info').each(function () {
        var length = 15;
    
        $(this).each(function () {
            if ($(this).text().length >= length) {
                $(this).text($(this).text().substr(0, length) + '..');
            }
        });
    });

    // -------------------------------- 기증자료 Slick
    $('.donationBox').slick({
        slidesToShow: 1,
        arrows: true
    });

    // -------------------------------- 알림 Slick
    $('.notiBox').slick({
        slidesToShow: 1,
        arrows: true,
        autoplay: true
    });

    // -------------------------------- linkBanner(연관 사이트 배너) Slick
    $('.banner_wrap').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        variableWidth: true
      });
});
