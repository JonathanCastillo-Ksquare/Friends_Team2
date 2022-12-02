let sound = document.querySelector(".sound");
sound.volume = 0.066
document.body.addEventListener('mouseover', () => {
    sound.muted = false;
    sound.play();
});

//Function that, when the user scrolls down the page, displays the nav bar.
window.onscroll = function () {
    scroll()
};

/*
In this function the top position of the body of the page is checked, if it is less than 20px
the navigation bar keeps its top position in 0px, otherwise it is displayed in 100px.    
*/
function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".navbar").style.top = "0";
    }
    else {
        document.querySelector(".navbar").style.top = "-100px";
    }
}
