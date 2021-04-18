(function ($) {
    $(function () {
        $(".jq--scroll-publication").on("click", function () {
            $("html,body").animate({
                scrollTop: $(".jq--publication").offset().top
            }, 500);
        });
        $(".jq--scroll-course").on("click", function () {
            $("html,body").animate({
                scrollTop: $(".jq--course").offset().top
            }, 500);
        });
    });

})(jQuery);