/* Dropdown list tablet */

$(document).ready(function() {
    var mainMenu = $('.header-menu_bottom_tablet');
    var pressLeftTablet = $('.header-bottom_link_private');
    var pressMiddleTablet = $('.header-bottom_link_corporative');
    var pressRightTablet = $('.header-bottom_link_services');
    var dropdownTablet = $('.header-top_link_dropdown');
    var dropdownTabletLeft = $('.dropdown-list_left_tablet');
    var dropdownTabletMiddle = $('.dropdown-list_middle_tablet');
    var dropdownTabletRight = $('.dropdown-list_right_tablet');

    $(dropdownTablet).on('click', function(e) {
        e.preventDefault();
        mainMenu.slideToggle();
        dropdownTabletLeft.hide();
        dropdownTabletMiddle.hide();
        dropdownTabletRight.hide();
    });

    $(pressLeftTablet).on('click', function(e) {
        e.preventDefault();
        dropdownTabletLeft.slideToggle();
        dropdownTabletMiddle.hide();
        dropdownTabletRight.hide();
    });

    $(pressMiddleTablet).on('click', function(e) {
        e.preventDefault();
        dropdownTabletMiddle.slideToggle();
        dropdownTabletLeft.hide();
        dropdownTabletRight.hide();
    });

    $(pressRightTablet).on('click', function(e) {
        e.preventDefault();
        dropdownTabletRight.slideToggle();
        dropdownTabletLeft.hide();
        dropdownTabletMiddle.hide();
    });

});

$(document).ready(function() {
    var coll = document.getElementsByClassName("collapsible-tablet");
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