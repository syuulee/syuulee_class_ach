$(function () {
    // $('.tabMenu>li').onclick(function(){}) 아래와 같은 함수인데 이벤트 하나씩밖에 못주는 단점이 있다.
    $('.tab_menu>li').on('click', function () {
        var idx = $(this).index();
        $('.tab_con>div').removeClass('on')
        $('.tab_con>div').eq(idx).addClass('on')
        // $('.tabCon>div').eq(idx).addClass('on').siblings().removeClass('on') 자바스크립트는 sibilings 쓰기 어려워서 위에처럼 바꿨다.
    });

    // $('.gnb>ul>li>a').on('click', function (e) {
    //     if ($('.gnb').hasClass('on')) {
    //         e.preventDefault();
    //         $('.smenu').slideUp()
    //         $(this).next().stop().slideToggle();
    //     }
    // });
    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on')
    });
    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.smenu').removeAttr('style')
    });


    $('.waffle').slick({
        slidesToShow: 4,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        dots: true,
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 765, //화면 사이즈 768px
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    $('.coffee').slick({
        slidesToShow: 4,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        dots: true,
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 765, //화면 사이즈 768px
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    $('.juice').slick({
        slidesToShow: 4,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        dots: true,
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 765, //화면 사이즈 768px
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    $('.tea').slick({
        slidesToShow: 4,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        dots: true,
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 765, //화면 사이즈 768px
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    $('.icecream').slick({
        slidesToShow: 4,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        dots: true,
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 765, //화면 사이즈 768px
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $('.slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1,
        //pauseOnHover:false,
        pauseOnFocus: false,
        pauseOnHover: false,
        dots: false,
        speed: 3000,
        variableWidth: true,
        cssEase: "linear",
    });
})