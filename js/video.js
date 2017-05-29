

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
sizee();

window.onload = window.onresize = function () {
    sizee();
}
var player;
var player2;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '966',
        width: '1718',
        videoId: 'qyo9oV-GLVc',
        playerVars: { 'autoplay': 1, 'controls': 0, 'wmode': 'opaque', 'showinfo': '0', 'autohide': '1', 'rel': '0' },
        events: {
            'onReady': onPlayerReady
        }
    });
    player2 = new YT.Player('protection-player', {
        height: '966',
        width: '1718',
        videoId: 'pAJYjslMIBg',
        playerVars: { 'autoplay': 1, 'controls': 0, 'wmode': 'opaque', 'showinfo': '0', 'autohide': '1', 'rel': '0' },
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
    player2.pauseVideo();
    player2.seekTo(5);
    player2.playVideo();

    setTimeout(stopVideo, 70000);
    sizee();
}
function sizee() {
    //var textt = document.getElementById("textt");
    sizeeInner(
        document.getElementById("player"),
        document.getElementById("player-container")
    );
    sizeeInner(
        document.getElementById("protection-player"),
        document.getElementById("protection-player-container")
    );

}
function sizeeInner(player, container) {
    var ww = window.innerWidth;
    if (ww > 1200) {
        player.style.width = ww + 'px';
        var height = ww * 720 / 1280 + 'px';
        player.style.height = height;
        container.style.height = height;
        //textt.style.top = (ww * 720 / 1280 / 2) - 10 + 'px';
    }
    else {
        player.style.width = '1200px';
        player.style.height = '675px';
        container.style.height = '675px';
        //textt.style.top = (675 / 2) - 10 + 'px';
    }
}
