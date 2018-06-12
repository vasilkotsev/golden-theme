$(document).ready(function () {
    var menu = $('.menu');
    var logo = $('#logo');

    var header = $('header');

    var hamburger = header.find('.hamburger');


    hamburger.on('click', function () {
        $(this).toggleClass('hamburger--stand is-active');
        menu.toggleClass('active');
        $('html').toggleClass('hidden-scroll');
        logo.toggleClass('logo-fixed');
    });



    $('header nav .menu a').on('click', function (e) {
        e.preventDefault();
        var element = $(this).attr('href');
        var offsetTop = $(element).offset().top;
        offsetTop = Math.round(offsetTop);

        $('html, body').animate({
            scrollTop: offsetTop - 50
        }, 300);

        menu.removeClass('active');
        $('html').removeClass('hidden-scroll');
        logo.removeClass('logo-fixed');
        hamburger.removeClass('hamburger--stand is-active');
    });
});