const soundSelector = document.getElementById("soundSelector");
const audioPlayer = document.getElementById("audio-player");
const body = document.body;

const soundData = {
  ocean: {
    audio: "ocean.mp3",
    background: 'url("ocean.jpg")',
  },
  rain: {
    audio: "rain.mp3",
    background: 'url("rain.jpg")',
  },
  forest: {
    audio: "forest.mp3",
    background: 'url("forest.jpg")',
  },
  fire: {
    audio: "fire.mp3",
    background: 'url("fire.jpg")',
  },
  thunder_storm: {
    audio: "thunderstorm.mp3",
    background: 'url("thunder_storm.jpg")',
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
