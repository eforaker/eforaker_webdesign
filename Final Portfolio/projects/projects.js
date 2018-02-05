$(document).ready(function(){

	$(".petey").ready(function(){
	$( ".peteyface").hide();
	});
	$(".petey").mouseenter(function(){
	$( ".peteyface").show();
	});

	$(".petey").ready(function(){
	$( ".plant").hide();
	});

	$(".petey").mouseenter(function(){
	$( ".plant").show();
	});

	$(".fish").ready(function(){
	$( ".fishnet" ).hide();
	});
	$(".fish").mouseenter(function(){
	$( ".fishnet" ).show();
	});

    $(".forbidden").ready(function(){
	$( ".fruitpic").hide();
	});
	$(".forbidden").mouseenter(function(){
	$( ".fruitpic").show();
	});

	$(".believe").ready(function(){
	$( ".believeicons").hide();
	});
	$(".believe").mouseenter(function(){
	$( ".believeicons").show();
	});

	$(".steinweiss").ready(function(){
	$( ".nogoogle").hide();
	});
	$(".steinweiss").mouseenter(function(){
	$( ".nogoogle").show();
	});

	$(".hooked").ready(function(){
	$( ".typefish").hide();
	});
	$(".hooked").mouseenter(function(){
	$( ".typefish").show();
	});

	$(".coupons").ready(function(){
	$( ".gursky").hide();
	});
	$(".coupons").mouseenter(function(){
	$( ".gursky").show();
	});

	$(".coupons").ready(function(){
	$( ".gursky2").hide();
	});
	$(".coupons").mouseenter(function(){
	$( ".gursky2").show();
	});

	$(".russian").ready(function(){
	$( ".russia").hide();
	});
	$(".russian").mouseenter(function(){
	$( ".russia").show();
	});

	$(".russian").ready(function(){
	$( ".russia2").hide();
	});
	$(".russian").mouseenter(function(){
	$( ".russia2").show();
	});


 // ICON ANIMATIONS

	$(".russia2 img").click(function() {
	  	$(this).toggleClass('russia2-active');
	});

	$(".peteyface img").click(function() {
	  	$(this).animate({top:'130px'});
	});


	// POPUPS



	$('.popup-inner img').click(function() {
	$(this).toggleClass('popup-inner-active');

	});

	$('.popup-inner p').click(function() {
	$(this).toggleClass('popup-inner-active');

	});

	$('[data-popup-open]').on('click', function(e)  {
	var targeted_popup_class = jQuery(this).attr('data-popup-open');
	$('[data-popup="' + targeted_popup_class + '"]').fadeIn(10).css({opacity:1});
	e.preventDefault();
	       //  $('html, body').animate({scrollTop:0});
        // return false;
	});

		$('.popup-close').click(function(){
		$('.popup').fadeOut(200);
		
		setTimeout(function(){ 
			$('.popup-inner p').removeClass('popup-inner-active');
			$('.popup-inner img').removeClass('popup-inner-active');
		 }, 400);

	});
});













