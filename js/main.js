/*
[Custom Script] Copyright © 2016
Theme Name : Homeopathy Unbounce Landing Page
Version    : 1.0
Author     : Conquerors Market Team
Author URI : https://conquerorsmarket.com
Support    : conquerorsmarket@gmail.com
*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

/* Document Ready */
$(document).ready(function () {

    "use strict";
    /* Page Pre Loading */
    $(window).load(function () { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
    });
    /* end Page Pre Loading */

    //Initiat WOW JS
    new WOW().init();

    /*Scroll To Top*/
    if (true) {
        if ($('.back-to-top').length) {
            var scrollTrigger = 1000, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('.back-to-top').addClass('show');
                    } else {
                        $('.back-to-top').removeClass('show');
                    }
                };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $('.back-to-top').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
    }
    //scrolls down
    /*Focus input form on link clicking */
    $('.focus-now').on('click', function () {
        $("#focus-input").focus();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        return false;

    });

    $('.about-slider').slick({
        infinite: true,
        speed: 300,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            }
        ]
    });

});
