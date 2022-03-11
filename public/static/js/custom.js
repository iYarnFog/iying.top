(function ($) {

    "use strict";

    // Header Scrolling Set White Background
    scrollNavBar();

    // Page loading animation
    $(window).on('load', () => {
        if ($('.cover').length) {
            $('.cover').parallax({
                imageSrc: $('.cover').data('image'),
                zIndex: '1'
            });
        }

        $("#preloader").animate({
            'opacity': '0'
        }, 600, () => {
            setTimeout(() => {
                // Home Parallax
                if ($('#parallax-text').length) {
                    $('#parallax-text').parallax({
                        imageSrc: 'assets/images/photos/parallax-counter.jpg',
                        zIndex: '1'
                    });
                }

                // Home Parallax Counter
                if ($('#counter').length) {
                    $('#counter').parallax({
                        imageSrc: 'assets/images/photos/parallax-counter.jpg',
                        zIndex: '1'
                    });
                }
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });
    });


    // Header Scrolling Set White Background
    $(window).on('scroll', () => scrollNavBar());

    // Navbar Scroll Set White Background Function
    function scrollNavBar() {
        var width = $(window).width();
        if (width > 991) {
            var scroll = $(window).scrollTop();
            if (scroll >= 30) {
                $(".header-area").addClass("header-sticky");
            } else {
                $(".header-area").removeClass("header-sticky");
            }
        }
    }

})(window.jQuery);
