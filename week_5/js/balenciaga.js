$(function () {
    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp();
    });


    $('#ytb').YTPlayer({
        videoURL: 'https://youtu.be/Tqe7OxE_0-A',
        containment: '.ytb',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
    });




    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200);
    });


    const PIC = document.querySelector('.fashion_pic')
    // PIC.forEach(function (el) {
    //     el.addEventListener('click', function (event) {
    //         event.preventDefault();
    //         LI.forEach(function (el) {
    //             el.classList.remove('on')
    //         })
    //         el.classList.add('on');
    //         console.log(event.target, event.currentTarget, this)
    //     })
    PIC.addEventListener('click', function () {
        console.log('ㅗ')
        PIC.foreach(function (el) {
            el.classList.remove('on')
        })
        el.classList.add('on');
    })

    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200);
    });

    $(window).on('scroll', function () {
        var up = $(window).scrollTop();
        console.log(up)
        if (up > 500) {
            $('.to_top').fadeIn(300);
            // $('.to_top').addClass('on')
        } else {
            $('.to_top').fadeOut(1000);
            // $('.to_top').removeClass('on')
        }
    });
    // $(window).on('scroll', function () {
    //     var sct = $(window).scrollTop();
    //     console.log(sct)
    //     if (sct > 870) {
    //         $('.to_top').fadeIn(200);
    //     } else {
    //         $('.to_top').fadeOut(500);
    //     }

    // })
})




// var pointSize = $(".pointer").width() / 2;
// $(".circle").mousemove(function (e) {
//     $('.pointer').css("top", e.pageY - pointSize);
//     $('.pointer').css("left", e.pageX - pointSize);
//     $('.pointer').fadeIn();
// });
// $(".circle").on("mouseleave", function () {
//     $('.pointer').fadeOut();
// });
