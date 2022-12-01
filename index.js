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

// Create a variable to store the sound
let sound = new Audio('/friends.mp3');
// Add an event to the window object so that when a user move the mouse on the page, something happens.
window.addEventListener('mousemove', () => {
    // Play the sound when the event is activated
    sound.play();
    // Set the volume in such a way that it is not annoying for the user
    sound.volume = 0.06;
})
// When the sound finishes it will activate an event, this is for looping the sound.
sound.addEventListener('ended', function () {
    sound.play();
    sound.volume = 0.06;
});
// prueba sonido