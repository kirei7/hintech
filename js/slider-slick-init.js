$(document).ready(function () {
    //initialize sliders
    $('#video-slider').slick(
        {
            fade: true,
            infinite: true,
            autoplay: false
        }
    );
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

    videoAutoPlay();
    $('#protection-player-container .slick-arrow').click(function () {
        videoAutoPlay();
    });
});

function adjustRestaurantHeight() {
    console.log("adjusting");
    $("#restaurants-slider .back").css("height", $("#restaurants-slider .front").css("height"));
}

function videoAutoPlay() {
    refreshVideos();
    playCurrentVideo();
}
function refreshVideos() {
    var videos = $('.slick-track video').toArray();
    videos.forEach(function (entry) {
        console.log(entry);
        entry.pause();
        entry.currentTime = 0;
    });
}
function playCurrentVideo() {
    var current = $('#video-slider video.slick-active').toArray();
    (current[0]).play();
}
