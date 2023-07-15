const audio = document.getElementById('themeSong');
const playPauseBtn = document.getElementById('playPauseBtn');


playPauseBtn.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
    playPauseBtn.classList.remove('paused');
    playPauseBtn.classList.add('playing');
  } else {
    audio.pause();
    playPauseBtn.classList.remove('playing');
    playPauseBtn.classList.add('paused');
  }
})
