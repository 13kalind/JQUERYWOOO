$(document).ready(function() {
	console.log("Page is ready. JS running...");
	$("#Hide").click(function(){
		$("#Hide").hide();
		console.log("Hid element 1.");
	});

	$("#fadeOut").click(function(){
		$("#fadeOut").fadeOut(2000);
		console.log("Faded element 2.");
	});

	$("#slideUp").click(function(){

		$("#slideUp").slideUp(2000);
		console.log("Slid element 3.");
	});

	$("#animate").mouseenter(function(){
		$("#animate").animate({
			left: "+=250",
			opacity: 0.5,
			height: 0.5
		});
		console.log("Animated element 4.");
	});
});