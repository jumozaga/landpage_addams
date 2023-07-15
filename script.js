const audio = document.getElementById('themeSong');
const playPauseBtn = document.getElementById('playPauseBtn');
// const audio = new Audio();
// audio.src = "./themesong.mp3";

audio.play();
playPauseBtn.classList.remove('paused');
playPauseBtn.classList.add('playing');


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
