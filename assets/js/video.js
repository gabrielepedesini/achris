/* video */

let num = 0;

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
    const fullscreenButton = document.getElementById("fullscreen-button");

    // When fullscreen button is clicked
    fullscreenButton.addEventListener("click", function(e) {
        e.preventDefault();

        if (num === 0) {
            // Start video from the beginning
            video.currentTime = 0;
            video.muted = false; // Unmute video
            video.play();
            num = 1; // Set num to 1 indicating the video has been played
        } else {
            video.muted = false; // Unmute video
            video.play();
        }

        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });

    // Listen for fullscreen change event
    document.addEventListener("fullscreenchange", function() {
        // Check if the document is currently in fullscreen mode
        if (!document.fullscreenElement) {
            video.muted = true; // Mute the video when exiting fullscreen
            video.play();
            
        }
    });
});

