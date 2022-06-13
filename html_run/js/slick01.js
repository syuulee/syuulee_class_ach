$(function () {

    $('.visual_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    });

    $('.slider').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,
        dots: true,
        pauseOnHover: false,
    });

    $('.slider02').slick({
        slidesToShow: 3,
    });
})

// $(function)=document ready
// () 와 $()=함수
//  ''는 문자이다. 문자가 아니면 숫자 또는 변수 또는 함수
// 무언가의 옵션을 주는 것이 매개변수. {}는 객체
// 자바스크립트에서는 줄바꾸기 큰 의미 없음

//arrows : prev next 없애는 것

//slidesToShow는 같은 숫자는 안 돌아감=이미지 3개인데 3을 주면 안됨
