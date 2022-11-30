window.onscroll = function () {
    scroll()
};

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".navbar").style.top = "0";
    }
    else {
        document.querySelector(".navbar").style.top = "-100px";
    }
}

let sound = new Audio('/friends.mp3');
window.addEventListener('mousemove', () => {
    sound.play();
    sound.volume = 0.06;
})
sound.addEventListener('ended', function () {
    sound.play();
    sound.volume = 0.06;
});