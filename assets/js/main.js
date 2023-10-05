(function($) {

    var $window = $(window),
        $banner = $('#banner'),
        $body = $('body'),
        $skills = $('.skills-box'); 

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
        loop: false,
        showCursor: false,
        onComplete: function() {
            $(".inner h1").css('visibility', 'visible');
        }
    }

    var typed = new Typed(".inner h1", options);
    $(".inner h1").css('visibility', 'hidden'); 

    // Changing the color of skill boxes every 1 minute
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function updateSkillBoxColors() {
        $skills.each(function() {
            $(this).css('background-color', getRandomColor());
        });
    }

    updateSkillBoxColors(); // First run
    setInterval(updateSkillBoxColors, 1 * 60 * 1000); // Update every 1 minute

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
