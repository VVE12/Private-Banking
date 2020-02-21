/* Main second blocks mobile tabs */
$(document).ready(function() {

    window.showBlockMobile = showBlockMobile;

    document.getElementById("defaultOpenMobile").click();

    function showBlockMobile(evt, blockNameMobile) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("main-second_tabcontent_mobile");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("main-second_tablinks_mobile");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(blockNameMobile).style.display = "block";
        evt.currentTarget.className += " active";
    }

});