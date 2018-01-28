$(document).ready(function() {
	$('.container1').draggable();
	$('.container2').draggable();
	$('.container3').draggable();
	$('.container4').draggable();
	$('.container5').draggable();
	$('.container6').draggable();
	$('.container7').draggable();

	$('.container1').click(function() {
    $(this).fadeOut('fast');
    });
    $('.container2').click(function() {
    $(this).fadeOut('fast');
	});
    $('.container3').click(function() {
    $(this).fadeOut('fast');
	});
	$('.container4').click(function() {
    $(this).fadeOut('fast');
    });
    $('.container5').click(function() {
    $(this).fadeOut('fast');
	});
    $('.container6').click(function() {
    $(this).fadeOut('fast');
	});
	$('.container7').click(function() {
    $(this).fadeOut('fast');
	});
});