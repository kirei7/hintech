var imgWidth = parseFloat($("#analitics-wrap img").css("width"));
var windowWidth = parseFloat($("#analitics-wrap").css("width"));

var imgWidthPercent = (imgWidth - windowWidth)/100;

function horizontalScroll(e) {
    var percents = e/10;

    var cssString = "-" + (percents*imgWidthPercent) + "px";

    $("#analitics-wrap img").css("margin-left", cssString);

}