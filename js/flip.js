$(".card").on("click", function (e) {
    console.log(e);
    $(e.currentTarget).toggleClass('flipped');
});

