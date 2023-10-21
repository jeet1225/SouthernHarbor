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
    $(window).on("resize", function() {
    if ($(this).width() > 1000) {
        $(".toggle").removeClass("active");
        $(".nav").removeAttr("style");
    }
    });
    $(".toggle").click(toggleSlideMenu);
    $(".nav").on("click", toggleMenu);
});

function toggleSlideMenu(event) {
    $(".toggle").toggleClass("active");
    $(".nav").slideToggle();
}
function toggleMenu(event) {
    if ($(".toggle:visible").hasClass("active")) {
        toggleSlideMenu(event)
    }
}
function close_popup(v1){
    $(".popup." + v1).fadeOut(300);
}
function open_popup(v1){
    $(".popup." + v1).fadeIn(300);
}