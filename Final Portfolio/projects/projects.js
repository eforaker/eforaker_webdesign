$(function() {
//----- OPEN
$('[data-popup-open]').on('click', function(e)  {
var targeted_popup_class = jQuery(this).attr('data-popup-open');
$('[data-popup="' + targeted_popup_class + '"]').fadeIn(10);
e.preventDefault();
});
//----- CLOSE
$('.popup-inner img').click(function() {
$(this).fadeOut(10);
});
});