// JavaScript Document

$(document).ready(function(){
	$("#right").mouseover(function() {
		$("#backgroundimage").fadeOut();
		$("#backgroundimage2").fadeIn("fast");
	});
	$("#right").mouseout(function() {
		$("#backgroundimage2").fadeOut();
		$("#backgroundimage").fadeIn("fast");
	});
});