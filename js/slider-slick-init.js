$(document).ready(function () {
    //initialize sliders
    $('.inside-slider').slick({
        fade: true,
        autoplay: true,
        accessibility: false,
        arrows: false,
        draggable: false
    });
    $('#technology').slick({
        autoplay: false,
        infinite: false
    });
    $('#restaurants-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('#slider-10-container').slick({

    });
    //initialize sliders /end

    //clear the arrow buttons from text
    $('.slick-arrow').empty();

    //verticalAlignInSlider()

});

function verticalAlignInSlider() {

    var img = $('#restaurants-slider img');
    img.each(function () {
        var margin = parseFloat($('#restaurants-slider .img-container').css("height")) - parseFloat($(this).css("height"));
        margin /= 2;
        $(this).css("margin-top", margin);
        console.log(margin);
    });

}
