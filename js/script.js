$(function () {

    // smooth scrolling setup
    const smoothScroll = new SmoothScroll('a[href*="#"]', {
        speed: 400
    });

    const collapsedNavMedia = window.matchMedia("(min-width: 601px)");

    // showing & hiding navigation (width < 600px)
    $('#showNavButton').click(function () {
        if ($(this).hasClass('collapsed')) { // user is showing navigation
            $('.navigation').slideDown();
            $(this).removeClass('collapsed');
        } else { // user is collapsing navigation
            $('.navigation').slideUp();
            $(this).addClass('collapsed');
        }
    });

    collapsedNavMedia.addListener(function (media) {
        if (media.matches && $('#showNavButton').hasClass('collapsed')) {
            $('.navigation').slideDown();
        }
    });
});