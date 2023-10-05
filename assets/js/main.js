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

    // Text appearing letter by letter.
    var options = {
        strings: ["Software Engineer, Security Analyst & Database Developers"],
        typeSpeed: 50,
        backDelay: 500,
        backSpeed: 30,
        loop: false,
        showCursor: false,
        startDelay: 500
    }

    var typed = new Typed(".inner h1", options);

    // Skill boxes color change every 5 minutes.
    var colors = ["#FF5733", "#33FF57", "#5733FF", "#33FFF1", "#FF33F5"]; // example colors
    var currentIndex = 0;

    function changeSkillsBoxColors() {
        $('.skills-box').css('background-color', colors[currentIndex]); // assuming 'skill-box' is the class for skill boxes
        currentIndex = (currentIndex + 1) % colors.length;
    }
    setInterval(changeSkillsBoxColors, 5 * 60 * 1000);  // change every 5 minutes

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
