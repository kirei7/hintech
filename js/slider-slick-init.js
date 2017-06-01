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
        autoplay: false,
        autoplaySpeed: 7000
    });
    $('#slider-10-container').slick({
        autoplay: true,
        autoplaySpeed: 7000
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
