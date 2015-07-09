$(document).ready(function () {

    $('#toggle').on('click', function(){
        $(".site-nav").fadeToggle(200);  //Display or hide the matched elements by animating their opacity.
        $(this).toggleClass("on");  //controls the nav menu to an X
    });
});