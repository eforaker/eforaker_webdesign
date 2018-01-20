$(document).ready(function() {
    $('.sushi').draggable();
	$('.canned').draggable();
    $('.bird').draggable();
    $('.cat').draggable();

    $('.canned').click(function() {
    $(this).fadeOut('slow');
    });
    $('.bird').click(function() {
    $(this).fadeOut('slow');
	});
    $('.sushi').click(function() {
    $(this).fadeOut('slow');
	});
});

