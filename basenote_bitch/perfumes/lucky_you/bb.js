var myAudio = new Audio('lucky.mp3');
var isPlaying = false;

function playAudio() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};