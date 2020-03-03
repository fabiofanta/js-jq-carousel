$(document).ready(function () {

    $(".right").click(nextSlide);
    $(".left").click(lastSlide);

    // bonus
    $(".bullet-slide i").click(function () {
        var test = $(".bullet-slide i").index(this);
        $(".bullet-slide i").removeClass("active");
        $(this).addClass("active");
        $(".slideshow img.active").removeClass("active");
        $(".slideshow img").eq(test).addClass("active");

    });

    //gestione tastiera

    $(document).keydown(function(event) {
        switch (event.key) {
            case "ArrowLeft":
                lastSlide();
                break;
            case "ArrowRight":
                nextSlide();
                break;
            default:
                console.log("tasto errato");
                break;
        }
    });

    // time
    var clock = setInterval(nextSlide,1000);
    //
    $(".slideshow").mouseenter(function () {
        clearInterval(clock)
    })

    $(".slideshow").mouseleave(function () {
        clearInterval(clock);
        clock = setInterval(nextSlide,1000);
    })

    // setTimeout(function () {
    //     clearInterval(clock);
    // },7000)



    function nextSlide () {
        if ($(".slideshow img.active").hasClass("last")) {

            $(".slideshow img.last").removeClass("active");
            $(".slideshow img.first").addClass("active");

            // bullet

            $(".bullet-slide i.last").removeClass("active");
            $(".bullet-slide i.first").addClass("active");
        } else {
            var slideActive = $(".slideshow img.active");
            var slideNext = $(".slideshow img.active").next();
            // bullet
            var bulletActive = $(".bullet-slide i.active");
            var bulletNext = $(".bullet-slide i.active").next();

            slideActive.removeClass("active");
            slideNext.addClass("active");
            // bullet
            bulletActive.removeClass("active");
            bulletNext.addClass("active");
        }
    }
    function lastSlide () {
        if ($(".slideshow img.active").hasClass("first")) {

            $(".slideshow img.first").removeClass("active");
            $(".slideshow img.last").addClass("active");
            //bullet
            $(".bullet-slide i.first").removeClass("active");
            $(".bullet-slide i.last").addClass("active");

        } else {
            var reverseSlideActive = $(".slideshow img.active");
            var reverseSlideLast = $(".slideshow img.active").prev();
            //bullet
            var reverseBulletActive = $(".bullet-slide i.active");
            var reverseBulletNext = $(".bullet-slide i.active").prev();

            reverseSlideActive.removeClass("active");
            reverseSlideLast.addClass("active");
            //bullet
            reverseBulletActive.removeClass("active");
            reverseBulletNext.addClass("active");
        }
    }

});
