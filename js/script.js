console.log("external JS is working");
$(document).ready(function(){
	console.log("jquery has loaded");
	// $("div").hide();
	// $("#box2").hide();
	// $(".box").hide();
	// $("#box4").show();

	// $("#box1").click(function(){
	// 	// console.log("red box has been clicked");
	// 	$("#box2").hide(1000);
	// });

	// $("#box3").click(function(){
	// 	// console.log("red box has been clicked");
	// 	$("#box2").show(1000); 
	// 	// time is in milliseconds
	// });

	// $("#box1").click(function(){
		// console.log("red box has been clicked");
		// $("#box2").fadeToggle();
		// $("#box4").fadeToggle();

		// $("#box2").toggleClass("boxLarge blue purple");
		// .removeClass();
		// });

	// $("#box2").css("width","400px");	

	$(".box").click(function(){
		$(this).toggleClass("boxLarge");
	});


// .toggle();
// .fadeOut();
// .fadeIn();
// .fadeToggle();
// .fadeToggle();

// .click();
// .dblclick();
// .mouseover();
// .mouseleave();
// .hover();


	// $("#box1").click(function(){
	// 	// console.log("red box has been clicked");
	// 	$("#box2").hide();
	// });

	// $("#box3").mouseleave(function(){
	// 	// console.log("red box has been clicked");
	// 	$("#box2").show();
	// });

	// $("#box1").mouseover(function(){
	// 	// console.log("red box has been clicked");
	// 	$("#box2").hide();
	// });

	// $("#box3").mouseover(function(){
	// 	// console.log("red box has been clicked");
	// 	$("#box2").show();
	// });

	// $("#box1").dblclick(function(){
	// 	// console.log("red box has been clicked");
	// 	$("#box2").hide();
	// });

	// $("#box3").mouseover(function(){
	// 	// console.log("red box has been clicked");
	// 	$("#box2").show();
	// });

	// $("#box1").dblclick(function(){
	// 	// console.log("red box has been clicked");
	// 	$("#box2").hide();
	// });

	// $("#box3").hover(function(){
	// 	// console.log("red box has been clicked");
	// 	$("#box2").show();
	// });

	// $("#box1").dblclick(function(){
	// 	// console.log("red box has been clicked");
	// 	$("#box2").hide();
	// });

	// $("#box3").dblclick(function(){
	// 	// console.log("red box has been clicked");
	// 	$("#box2").show();
	// });


})