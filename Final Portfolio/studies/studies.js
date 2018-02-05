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

    $(".thompsonfish").ready(function(){
	$( ".typefish").hide();
	});
	$(".thompsonfish").mouseenter(function(){
	$( ".typefish").show();
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

	$('.popup-inner img').click(function() {
	$(this).toggleClass('popup-inner-active');

	});

	$('.popup-inner p').click(function() {
	$(this).toggleClass('popup-inner-active');

	});


	$(".typefish img").click(function() {
	 $(this).toggleClass('typefish-active');
	});


$('[data-popup-open]').on('click', function(e)  {
var targeted_popup_class = jQuery(this).attr('data-popup-open');
$('[data-popup="' + targeted_popup_class + '"]').fadeIn(10);
e.preventDefault();
});

//----- CLOSE
		$('.popup-close').click(function(){
		$('.popup').fadeOut(200);
		
		setTimeout(function(){ 
			$('.popup-inner p').removeClass('popup-inner-active');
			$('.popup-inner img').removeClass('popup-inner-active');
		 }, 400);

});
});




