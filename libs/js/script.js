var i = 0;
var oPlayEy = document.getElementsByClassName('PlayEy')[0];
var oPlay = document.getElementsByClassName('Play')[0];
var audios = document.getElementById('audios');
oPlay.onclick = function () {
  var seii = setInterval(function () {
    i == 360 ? (i = 0) : i++;
    oPlayEy.style.transform = 'rotate(' + i + 'deg)';
    if (audios.paused) {
      clearInterval(seii);
    }
  }, 30);
  if (audios.paused) {
    audios.play();
    oPlay.classList.remove('pause');
    oPlay.classList.add('play');
  } else {
    audios.pause();
    oPlay.classList.remove('play');
    oPlay.classList.add('pause');
  }
};
