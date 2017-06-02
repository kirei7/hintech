$(document).ready(function () {
    //initialize sliders
    $('.inside-slider').slick({
        fade: false,
        autoplay: true,
        autoplaySpeed: 7000
    });
    $('#technology').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000
    });
    $('#operations').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000
    });
    $('#restaurants-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				  infinite: true,
				  slidesToShow: 2
			  }
			},
			{
			  breakpoint: 680,
			  settings: {
				  infinite: true,
				  slidesToShow: 1
			  }
			}
		]
    });
    $('#slider-10-container').slick({
        autoplay: true,
        autoplaySpeed: 7000
    });
    //initialize sliders /end

    //clear the arrow buttons from text
    $('.slick-arrow').empty();

    adjustRestaurantHeight();
    $(window).resize(adjustRestaurantHeight);

});

function adjustRestaurantHeight() {
    console.log("adjusting");
    $("#restaurants-slider .back").css("height", $("#restaurants-slider .front").css("height"));
}

