$(document).ready(function() {
    $('.images img').draggable();

  var audio = document.getElementsByTagName('#crazy audio')[0];
  $("#britney2").click(function() {
  	  console.log("play");
      if (audio.paused) audio.play();
    else audio.pause();
  });

    var audio = document.getElementsByTagName('#hitme audio')[0];
  $("#britney3").click(function() {
  	  console.log("play");
      if (audio.paused) audio.play();
    else audio.pause();
  });

    var audio = document.getElementsByTagName('audio')[0];
  $("#britney4").click(function() {
  	  console.log("play");
      if (audio.paused) audio.play();
    else audio.pause();
  });

    var audio = document.getElementsByTagName('audio')[0];
  $("#britney5").click(function() {
  	  console.log("play");
      if (audio.paused) audio.play();
    else audio.pause();
  });
});