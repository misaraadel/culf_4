$(document).ready(function () {
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });

    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.navbar-nav').toggleClass('active-nav');
        $('body').toggleClass('overflowNone')
    });

    $('.owl-products').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });

    $('.owl-services').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.owl-clients').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });
});