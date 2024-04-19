const videoContainer = document.querySelector(".video-container");
const video = document.querySelector(".video");
const playButton = document.querySelector(".play-button");

// Function to toggle video playback (optional)
function togglePlayback() {
  if (video.src) { // Check if video source is set
    if (video.paused) {
      video.play();
      playButton.textContent = "Pause";
    } else {
      video.pause();
      playButton.textContent = "Play";
    }
  }
}

// Start video playback on cover image click
videoContainer.addEventListener("click", togglePlayback);

// Optionally, show/hide play button on hover
// videoContainer.addEventListener("mouseover", () => playButton.style.display = "block");
// videoContainer.addEventListener("mouseout", () => playButton.style.display = "none");
