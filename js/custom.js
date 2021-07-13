// Counter plugin
$('.counter').counterUp(
    {
        delay: 500,
        time: 1000,

    }
);
// slick slider
$('.single-testimonial').slick({
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    responsive: [
        {
            breakpoint: 767,
            settings:
            {
                speed: 400,
                infinite: true,
                autoplaySpeed: 2000,
            }
        }
    ],
});
// nav bar scroll
let navBarShow = $("#navBar").offset().top;
$(window).scroll(() => {

    let windowScroll = $(window).scrollTop()
    if (windowScroll > navBarShow) {
        $("#navBar").attr("id", "navBarScroll")
    } else {
        $("#navBarScroll").attr("id", "navBar")
    }

    // scroll to top button
    if (windowScroll > $("header").offset().top + 500) {
        $('#scrollTopBtn').fadeIn(500);
        $('#scrollTopBtn').css("display", "flex")
    } else {
        $('#scrollTopBtn').fadeOut(500);
    }
})
//scorll to top btn
$("#scrollTopBtn").click(() => {
    $("html,body").animate({ scrollTop: 0 }, 2)
})
// aos plugin
AOS.init();
// loading screen
$(window).ready(() => {
    $("#loading").fadeOut(1000)
    $("body").css("overflow", "auto")
})