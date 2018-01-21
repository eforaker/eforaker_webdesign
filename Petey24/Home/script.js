$(document).ready(function() {
    $('.cat').draggable();
    var audio = document.getElementsByTagName("audio")[0];
	$(".Peteys").mouseenter(function() {
	audio.play();
});
});