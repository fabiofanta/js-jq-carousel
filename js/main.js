$(document).ready(function () {
    $(".right").click(nextSlide);
    $(".left").click(lastSlide);



    function nextSlide () {
        if ($(".slideshow img.active").hasClass("last")) {
            $(".slideshow img.last").removeClass("active");
            $(".slideshow img.first").addClass("active")
        } else {
            var slideActive = $(".slideshow img.active");
            var slideNext = $(".slideshow img.active").next();

            slideActive.removeClass("active");
            slideNext.addClass("active");
        }
    }
    function lastSlide () {
        if ($(".slideshow img.active").hasClass("first")) {
            $(".slideshow img.first").removeClass("active");
            $(".slideshow img.last").addClass("active")
        } else {
            var reverseSlideActive = $(".slideshow img.active");
            var reverseSlideLast = $(".slideshow img.active").prev();

            reverseSlideActive.removeClass("active");
            reverseSlideLast.addClass("active");
        }
    }

});
