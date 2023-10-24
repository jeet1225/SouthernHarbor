$(function() {
    $(".kv_photo.owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
                slideBy: 1,
            },
            // breakpoint from 600 up
            600 : {
                items: 2,
                slideBy: 2,
            },
            // breakpoint from 1120 up
            1120 : {
                items: 3,
                slideBy: 3,
            }
        }
    });
    $(".fd3a.owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        stagePadding: 0,
        margin: 0,
        slideBy: 1,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 700 up
            700 : {
                items: 2,
            },
            // breakpoint from 1000 up
            1000 : {
                items: 3,
            },
            // breakpoint from 1350 up
            1350 : {
                items: 4,
            },
            // breakpoint from 1750 up
            1750 : {
                items: 5,
            },
        }
    });
    $(window).on("resize", function() {
    if ($(this).width() > 1000) {
        $(".toggle").removeClass("activeclose");
        $(".nav").removeAttr("style");
    }
    });
    $(".toggle").click(toggleSlideMenu);
    $(".nav").on("click", toggleMenu);
});

function toggleSlideMenu(event) {
    $(".toggle").toggleClass("activeclose");
    $(".nav").slideToggle();
}
function toggleMenu(event) {
    if ($(".toggle:visible").hasClass("activeclose")) {
        toggleSlideMenu(event)
    }
}
function close_popup(v1){
    $(".popup." + v1).fadeOut(300);
}
function open_popup(v1){
    $(".popup." + v1).fadeIn(300);
}