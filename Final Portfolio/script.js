$(document).ready(function(){

	$(".designwork a.project").ready(function(){
	$( ".proj").hide();
	});
	$(".designwork a.project").mouseenter(function(){
	$( ".proj").show();
	});

	$(".designwork a.studies").ready(function(){
	$( ".blends").hide();
	});
	$(".designwork a.studies").mouseenter(function(){
	$( ".blends").show();
	});
});