
jQuery(window).on('load', function() {

    jQuery(".loading-screen").fadeOut(500, function () {
        jQuery(".header").fadeIn(500);
        jQuery(".container-fluid").fadeIn(500);
        jQuery(".footer").fadeIn(500);
    });

});


jQuery( document ).ready(function () {
    jQuery(".loading-screen").fadeOut(500, function () {
        jQuery(".header").fadeIn(500);
        jQuery(".container-fluid").fadeIn(500);
        jQuery(".footer").fadeIn(500);
    });
    /* Hamb behavior */
    jQuery(".menu-box__open").hide(0);
    jQuery(".menu-box button").click(function () {
        if ( jQuery(".navbar-collapse").is(":visible") ) {
            jQuery(".menu-box__hamb").show(1000);
            jQuery(".menu-box__open").hide(1000);
            jQuery(".menu-box").css("background-color", "rgba(80, 134, 185, 0)");
        } else {
            jQuery(".menu-box__hamb").hide(1000);
            jQuery(".menu-box__open").show(1000);
            jQuery(".menu-box").css("background-color", "rgba(80, 134, 185, 1)");
        }
    });
    /* END Hamb behavior */

    /* Carousel */
    $('.carousel').carousel({
        interval: 17000
    });

    $('.carousel .carousel-item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }

        if (next.next().next().length>0) {
            next.next().next().children(':first-child').clone().appendTo($(this));
        }
        else {
            if (next.next().length>0) {
                $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
            }
            else{
                $(this).siblings(':first').children(':first-child').next().clone().appendTo($(this));
            }
        }
    });

    /* END Carousel */
});