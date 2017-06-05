var imgWidth;
var windowWidth;
var imgWidthPercent;
$(document).ready(function () {
    imgWidth = parseFloat($("#analitics-wrap img").css("width"));
    windowWidth = parseFloat($("#analitics-wrap").css("width"));

    imgWidthPercent = (imgWidth - windowWidth)/100;
});

function horizontalScroll(e) {
    var percents = e/10;

    var cssString = "-" + (percents*imgWidthPercent) + "px";

    $("#analitics-wrap img").css("margin-left", cssString);

}