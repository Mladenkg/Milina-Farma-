$(function () {

    //    Dodavanje animacije na header prilikom scroll-a
    var shrinkHeader = 300;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('header').addClass('shrink');
        } else {
            $('header').removeClass('shrink');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }


    $(".topnav").click(function () {
        $('.navigation').removeClass("responsive");
    });

    $(".icon").click(function () {
        $('.topnav').addClass("responsive");
    });



    $('.navigation .topnav a').click(function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $("html:not(:animated),body:not(:animated)").animate({
            'scrollTop': $(href).offset().top
        }, 700, 'swing');
    });
    $(window).scroll(function () {
        var href = $(this).scrollTop();
        $('.link').each(function (event) {
            if (href >= $($(this).attr('href')).offset().top - 1) {
                $('.link').not(this).removeClass('active');
                $(this).addClass('active');
            }


        });
    });
});
