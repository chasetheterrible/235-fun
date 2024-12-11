const soundSelector = document.getElementById("soundSelector");
const audioPlayer = document.getElementById("audio-player");
const body = document.body;

const soundData = {
  ocean: {
    audio: "sounds/ocean.mp3",
    background: 'url("images/ocean.jpg")',
  },
  rain: {
    audio: "sounds/rain.mp3",
    background: 'url("images/rain.jpg")',
  },
  forest: {
    audio: "sounds/forest.mp3",
    background: 'url("images/forest.jpg")',
  },
  fire: {
    audio: "sounds/fire.mp3",
    background: 'url("images/fire.jpg")',
  },
  thunder_storm: {
    audio: "sounds/thunderstorm.mp3",
    background: 'url("images/thunder_storm.jpg")',
  },
};

soundSelector.addEventListener("change", (event) => {
  const selectedSound = event.target.value;
  if (soundData[selectedSound]) {
    // Update background
    body.style.backgroundImage = soundData[selectedSound].background;

    // Play the selected sound
    audioPlayer.src = soundData[selectedSound].audio;
    audioPlayer.play().catch((error) => {
      console.error("Playback error:", error);
      alert("Failed to play the audio. Check your browser settings.");
    });
  } else {
    // Stop playing if no sound is selected
    audioPlayer.pause();
    audioPlayer.src = "";
    body.style.backgroundImage = "";
  }
});
