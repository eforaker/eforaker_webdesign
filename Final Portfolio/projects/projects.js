$(document).ready(function(){

	$(".petey").ready(function(){
	$( ".peteyface").hide();
	});
	$(".petey").hover(function(){
	$( ".peteyface").toggle();
	});

	$(".petey").ready(function(){
	$( ".plant").hide();
	});

	$(".petey").hover(function(){
	$( ".plant").toggle();
	});

	$(".fish").ready(function(){
	$( ".fishnet" ).hide();
	});
	$(".fish").hover(function(){
	$( ".fishnet" ).toggle();
	});

    $(".forbidden").ready(function(){
	$( ".fruitpic").hide();
	});
	$(".forbidden").hover(function(){
	$( ".fruitpic").toggle();
	});

	$(".believe").ready(function(){
	$( ".believeicons").hide();
	});
	$(".believe").hover(function(){
	$( ".believeicons").toggle();
	});

	$(".steinweiss").ready(function(){
	$( ".nogoogle").hide();
	});
	$(".steinweiss").hover(function(){
	$( ".nogoogle").toggle();
	});

	$(".hooked").ready(function(){
	$( ".typefish").hide();
	});
	$(".hooked").hover(function(){
	$( ".typefish").toggle();
	});

	$(".coupons").ready(function(){
	$( ".gursky").hide();
	});
	$(".coupons").hover(function(){
	$( ".gursky").toggle();
	});

	$(".coupons").ready(function(){
	$( ".gursky2").hide();
	});
	$(".coupons").hover(function(){
	$( ".gursky2").toggle();
	});

	$(".russian").ready(function(){
	$( ".russia").hide();
	});
	$(".russian").hover(function(){
	$( ".russia").toggle();
	});

	$(".russian").ready(function(){
	$( ".russia2").hide();
	});
	$(".russian").hover(function(){
	$( ".russia2").toggle();
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












