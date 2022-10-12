$(function () {
 

 $('.main_slider').on('init reInit afterChange', function(e,s,c) {
    console.log(e,s,c);
    $('.num').text((c ? c + 1  : 1)+ "/" +s.slideCount);
    let cur = $('.slick-current');
    cur.addClass('xoxo').siblings().removeClass('xoxo')
 });

 $('.main_slider').slick({
    dots: true,
    autoplay:true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    
});

})

// dots: true=도트 나와라
// e,s,c = event, slick, currentSlide
// pause:true, 