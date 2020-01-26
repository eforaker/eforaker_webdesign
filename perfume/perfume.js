  var audio = document.getElementsByTagName('audio')[0];
  $(".bottle img").click(function() {
  	  console.log("play");
      if (audio.paused) audio.play();
    else audio.pause();
  });
