$(document).ready(function() {
    $('.mouse').draggable();
	$('.cat').draggable();
	$('.ball').draggable();
	$('.ball2').draggable();
$('.breakfast').each(function() {
    var elem = $(this);
    setInterval(function() {
        if (elem.css('visibility') == 'hidden') {
            elem.css('visibility', 'visible');
        } else {
            elem.css('visibility', 'hidden');
        }    
    }, 750);
});
$('.dinner').each(function() {
    var elem = $(this);
    setInterval(function() {
        if (elem.css('visibility') == 'hidden') {
            elem.css('visibility', 'visible');
        } else {
            elem.css('visibility', 'hidden');
        }    
    }, 650);
});
});

