/* Main first blocks mobile slider */

import $ from 'jquery';
import slick from 'slick-carousel';
/* require('slick-carousel') */
$(document).ready(function() {
    $('.main-first_slider_mobile').slick({
        centerMode: true,
        centerPadding: '60px',
        dots: true,
        slidesToShow: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});