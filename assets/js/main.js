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

    // Text appearing word by word.
    var options = {
        strings: ["Software Engineer,", "Security Analyst &", "Database Developer"],
        typeSpeed: 50,
        backDelay: 500,
        backSpeed: 30,
        onComplete: function(self) {
            $(".inner h1").html("Software Engineer, Security Analyst & Database Developer"); 
        }
    };
	
    var typed = new Typed(".inner h1", options);
    
    // Determines if the given color is light
    function isLight(color) {
        var r, g, b, hsp;
        
        // Convert hex color to RGB
        r = parseInt(color.substr(1, 2), 16);
        g = parseInt(color.substr(3, 2), 16);
        b = parseInt(color.substr(5, 2), 16);
        
        // Calculate the perceived brightness
        hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
        
        // If perceived brightness is high, it's a light color
        return hsp > 127.5;
    }

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
            var color = getRandomColor();
            $(this).css('background-color', color);

            // Check if the color is light or dark
            if (isLight(color)) {
                $(this).css('color', '#000');  // Set text color to black if background is light
            } else {
                $(this).css('color', '#FFF');  // Set text color to white if background is dark
            }
        });
    }

    updateSkillBoxColors(); // First run
    setInterval(updateSkillBoxColors, 5 * 1000); // Update every 5 seconds

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
