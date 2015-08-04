$(document).ready(function () {

    $('#toggle').on('click', function(){
        $(".site-nav").fadeToggle(200);  //Display or hide the matched elements by animating their opacity.
        $(this).toggleClass("on");  //controls the nav menu to an X

        if ($('#toggle').hasClass('on')) {
            $('.header').fadeOut();
            $('.partners-list').fadeOut();
        }
        else {
            $('.header').fadeIn();
            $('.partners-list').fadeIn();
        }

    });

    $(".arrow-container").click(function() {
        $('html, body').animate({
            scrollTop: $(".about-header").offset().top
        }, 1000);
    });
});

(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

$(window).scroll(function(event) {

    $(".item-img").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });

});




