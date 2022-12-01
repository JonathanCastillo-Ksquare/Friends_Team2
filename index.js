let sound = document.querySelector(".sound");
sound.volume = 0.066
document.body.addEventListener('mouseover', () => {
    sound.muted = false;
    sound.play();
});

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
