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
});


$(function() {
//----- OPEN
	$('[data-popup-open]').on('click', function(e)  {
	var targeted_popup_class = jQuery(this).attr('data-popup-open');
	$('[data-popup="' + targeted_popup_class + '"]').fadeIn(10);
	e.preventDefault();
	});
//----- CLOSE
	$('[data-popup-close]').on('click', function(e)  {
	var targeted_popup_class = jQuery(this).attr('data-popup-close');
	$('[data-popup="' + targeted_popup_class + '"]').fadeOut(10);
	e.preventDefault();
	});
});












