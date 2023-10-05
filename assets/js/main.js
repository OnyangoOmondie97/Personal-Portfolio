(function($) {

    var $window = $(window),
        $banner = $('#banner'),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        default: ['1681px', null],
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['361px', '480px'],
        xxsmall: [null, '360px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Video playback on scroll.
    var $video = $("video");  
    $window.on('scroll', function() {
        var videoTop = $video.offset().top;
        var windowBottom = $window.scrollTop() + $window.height();

        if (windowBottom > videoTop) {
            $video[0].play();
        } else {
            $video[0].pause();
        }
    });

    // Text appearing word by word.
    var options = {
        strings: ["Software Engineer", ", Security Analyst &", "Database Developers"],
        typeSpeed: 50,
        backDelay: 500,
        backSpeed: 30,
        loop: false
    }

    var typed = new Typed(".inner h1", options);

    // Menu.
    $('#menu')
        .append('<a href="#menu" class="close"></a>')
        .appendTo($body)
        .panel({
            target: $body,
            visibleClass: 'is-menu-visible',
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right'
        });

})(jQuery);
