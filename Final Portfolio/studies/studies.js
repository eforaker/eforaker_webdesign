$(document).ready(function(){

	$(".blends").ready(function(){
	$( ".blendicon").hide();
	});
	$(".blends").mouseenter(function(){
	$( ".blendicon").show();
	});

	$(".2017").ready(function(){
	$( ".metoo" ).hide();
	});
	$(".2017").mouseenter(function(){
	$( ".metoo" ).show();
	});

    $(".subversion").ready(function(){
	$( ".dogs").hide();
	});
	$(".subversion").mouseenter(function(){
	$( ".dogs").show();
	});

	$(".patterns").ready(function(){
	$( ".key").hide();
	});
	$(".patterns").mouseenter(function(){
	$( ".key").show();
	});

	$(".free").ready(function(){
	$( ".nips").hide();
	});
	$(".free").mouseenter(function(){
	$( ".nips").show();
	});
});

$(function() {
//----- OPEN
$('[data-popup-open]').on('click', function(e)  {
var targeted_popup_class = jQuery(this).attr('data-popup-open');
$('[data-popup="' + targeted_popup_class + '"]').fadeIn(10);
e.preventDefault();
});
//----- CLOSE
$('.popup').click(function() {
$(this).fadeOut(10);
});
});