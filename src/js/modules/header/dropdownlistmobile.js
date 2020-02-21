/* Dropdown list mobile */

$(document).ready(function() {
    var touch = $('.icon-dropdown');
    var menu = $('.menu');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 767 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

});

$(document).ready(function() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

});