

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
sizee();

window.onload = window.onresize = function () {
    sizee();
}
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '966',
        width: '1718',
        videoId: 'qyo9oV-GLVc',
        playerVars: { 'autoplay': 1, 'controls': 0, 'autohide': 1, 'wmode': 'opaque', 'showinfo': '0', 'autohide': '1', 'rel': '0' },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.mute();
    setTimeout(stopVideo, 60000);
}
function stopVideo() {
    player.pauseVideo();
    player.seekTo(5);
    player.playVideo();
    setTimeout(stopVideo, 70000);
    sizee();
}
function sizee() {
    var ww = window.innerWidth;
    var player = document.getElementById("player");
    var textt = document.getElementById("textt");
    if (ww > 1200) {
        player.style.width = ww + 'px';
        player.style.height = ww * 720 / 1280 + 'px';
        textt.style.top = (ww * 720 / 1280 / 2) - 10 + 'px';
    }
    else {
        player.style.width = '1200px';
        player.style.height = '675px';
        textt.style.top = (675 / 2) - 10 + 'px';
    }

    document.getElementById("asd").style.height = document.getElementById("player").style.height;

}
