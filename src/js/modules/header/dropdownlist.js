/* Dropdown list */

$(document).ready(function() {
    var pressTop = $('.header-top_link_bank');
    var pressLeft = $('.header-bottom_link_private');
    var pressMiddle = $('.header-bottom_link_corporative');
    var pressRight = $('.header-bottom_link_services');
    var dropdownTop = $('.dropdown-list__top');
    var dropdownLeft = $('.dropdown-list__left');
    var dropdownMiddle = $('.dropdown-list__middle');
    var dropdownRight = $('.dropdown-list__right');
    var buttonClose = $('.dropdown-list__close');

    $(pressTop).on('click', function(e) {
        e.preventDefault();
        dropdownTop.slideToggle();
        dropdownLeft.hide();
        dropdownMiddle.hide();
        dropdownRight.hide();
    });

    $(pressLeft).on('click', function(e) {
        e.preventDefault();
        dropdownLeft.slideToggle();
        dropdownTop.hide();
        dropdownMiddle.hide();
        dropdownRight.hide();
    });

    $(pressMiddle).on('click', function(e) {
        e.preventDefault();
        dropdownMiddle.slideToggle();
        dropdownTop.hide();
        dropdownLeft.hide();
        dropdownRight.hide();
    });

    $(pressRight).on('click', function(e) {
        e.preventDefault();
        dropdownRight.slideToggle();
        dropdownTop.hide();
        dropdownLeft.hide();
        dropdownMiddle.hide();
    });

    $(buttonClose).on('click', function(e) {
        e.preventDefault();
        dropdownTop.hide();
        dropdownLeft.hide();
        dropdownMiddle.hide();
        dropdownRight.hide();
    });

});