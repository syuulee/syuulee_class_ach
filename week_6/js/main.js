$(function () {
    $('.show').slick({
        slidesToShow: 4,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200, // 화면의 넓이가 600px 이상일 때
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 800, // 화면의 넓이가 320px 이상일 때
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
        ],
    });

    $('.slide_deco .left_arrow i:nth-child(1)').on('click', function () {
        $('.show').slick('slickNext');
    });

    $('.slide_deco .left_arrow i:nth-child(2)').on('click', function () {
        $('.show').slick('slickPrev');
    });

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('.gnb').toggleClass('on');
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $('.smenu').stop().slideUp();
        $(this).next().stop().slideToggle();
    });

    $('.tab_menu>li>a').on('click', function (e) {
        e.preventDefault();
        // console.log($(this).parent().index());
        var idx = $(this).parent().index();
        $('.tab_content>li').removeClass('on');
        $('.tab_content>li').eq(idx).addClass('on');
        $('.tab_menu> li').removeClass('on');
        $(this).parent().addClass('on');
    });

    $('.fl').on('change', function () {
        console.log($(this), $(this).val());
        var lnk = $(this).val();
        lnk && window.open(lnk);
    });
});

$(window).on('resize', function () {
    $('.gnb').removeClass('on');
    $('.smenu').removeAfttr('style');
});
