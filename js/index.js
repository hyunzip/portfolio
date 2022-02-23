$(function () {

    // ------------------------------------------------- header scroll menu
    $(".menu li").each(function() {
        $(this).click(function(e) {
            var thisOffset = $("." + $(this).data('id')).offset().top;
            $("html, body").animate({
                scrollTop: thisOffset
            }, 2500);
            $(".menu li").removeClass("on");
            $(this).addClass('on');
            e.stopPropagation();
        });
    });
    
    // ------------------------------------------------- Project Title Tab
    $(".tab ul li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
        AOS.refreshHard();
        $('.controleImgs').slick('refresh');
    });
    // ------------------------------------------------- slick slide 시작된 후 AOS 시작
    $(".indexImgs").on('init', function (event, slick) {
        console.log('.indexImgs init');
        AOS.init();
    });

    $(".indexImgs").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });

    $(".controleImgs.slider-for").slick({
        slidesToShow: 1,
        slidesToScoll: 1,
        asNavFor: '.controleImgs.slider-nav',
        arrows: false
    });
    $(".controleImgs.slider-nav").slick({
        slidesToShow: 2,
        slidesToScoll: 2,
        asNavFor: '.controleImgs.slider-for',
        infinite: true,
        centerMode: true,
        focusOnSelect: false
    });

    $(".modalTableimgs").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
    //------------------------------------------------- scroll top
    $(".top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    $("button.proA").click(function() {
        window.open("https://ezportfolio.cafe24.com/ez210927/njh/%ED%95%98%EA%B2%90%EB%8B%A4%EC%A6%88/haagendazs.html");
    })

    $("button.proB").click(function() {
        window.open("https://ezportfolio.cafe24.com/ez210927/njh/contentslab/");
    })
    $("button.probPdf").click(function() {
        window.open("https://runauxlabs.github.io/portfolio/ui/njh_ui.pdf");
    })


    $("button.proC").click(function() {
        window.open("https://ezportfolio.cafe24.com/ez210927/njh/hangeulmuseum/");
    })
    
});

