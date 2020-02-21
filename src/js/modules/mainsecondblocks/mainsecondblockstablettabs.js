/* Main second blocks tablet tabs */
$(document).ready(function() {

    window.showBlock = showBlock;

    document.getElementById("defaultOpen").click();

    function showBlock(evt, blockName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("main-second__tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("main-second__tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(blockName).style.display = "block";
        evt.currentTarget.className += " active";
    }
});