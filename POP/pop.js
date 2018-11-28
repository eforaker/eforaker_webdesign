$(document).ready(function() {
    $('.images img').draggable();

  var audio = document.getElementsByTagName("audio")[0];
  $("#britney2").click(function() {
  	  console.log("play");
      if (audio.paused) audio.play();
    else audio.pause();
  });
});