// window.onload = function() {

// 	document.body.className = "animate";

// }
$(document).ready(function(){
	$('#scene').parallax();
	$('#scene2').parallax();


	$(".back-to-top").click(function(){
		console.log("scrollTo Works");
		$.scrollTo( $(".big-image"), 2000 );
		// $.scrollTo( 150, 2000 );//scroll to top: 150

	});

});



$(function () { // wait for document ready
	// init
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	// // get all slides
	// var slides = document.querySelectorAll("section.panel");

	// // create scene for every slide
	// for (var i=0; i<slides.length; i++) {
	// 	new ScrollMagic.Scene({
	// 			triggerElement: slides[i]
	// 		})
	// 		.setPin(slides[i])
	// 		//.addIndicators() // add indicators (requires plugin)
	// 		.addTo(controller)
	// }
});

$(function () { // wait for document ready
	var flightpath = {
		entry : {
			curviness: 1.25,
			autoRotate: true,
			values: [
					{x: 10,	y: -20},
					{x: 30,	y: 10}
				]
		},
		looping : {
			curviness: 1.25,
			autoRotate: true,
			values: [
					{x: 510,	y: 60},
					{x: 620,	y: -60},
					{x: 500,	y: -100},
					{x: 380,	y: 20},
					{x: 500,	y: 60},
					{x: 580,	y: 20},
					{x: 620,	y: 15}
				]
		},
		leave : {
			curviness: 1.25,
			autoRotate: true,
			values: [
					{x: 660,	y: 20},
					{x: 800,	y: 130},
					{x: $(window).width() + 200,	y: -100},
				]
		}
	};
	// init controller
	var controller = new ScrollMagic.Controller();

	// create tween
	var tween = new TimelineMax()
		.add(TweenMax.to($("#drunk_badguy"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
		.add(TweenMax.to($("#drunk_badguy"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
		.add(TweenMax.to($("#drunk_badguy"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: -100})
		.setPin("#target")
		.setTween(tween)
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
})

var $header__logo= document.getElementById("header__logo");

//changing the menu to make smaller-need to update for this projects
$(window).on("scroll", function() {
		
		var position = $(window).scrollTop();
		console.log( "position:" + $(window).scrollTop() );

		if ($(window).innerWidth() >= 0){	
			if(position >= 60){
				$("header").addClass("menu-small");
				$header__logo.src = "media/img/logos/EarthDayLogo_white.png";
				$header__logo.style.transitionDuration = "0.7s";
			}

			if(position < 60){
				// $(".logo").addClass(".logo-large");
				$("header").removeClass("menu-small");
				$header__logo.src = "media/img/logos/EarthDayLogo_blue.png";
				$header__logo.style.transitionDuration = "0.7s";
			}
		};
		if ($(window).innerWidth() >= 0){
			if(position >= 160){
				$(".alien").removeClass("alien--sprite__steady");
				$(".alien").addClass("alien--sprite__falling");
			}
			if(position <= 160){
				$(".alien").removeClass("alien--sprite__falling");
				$(".alien").addClass("alien--sprite__steady ");
			}
			if(position >= 2080){
				$(".alien").removeClass("alien--sprite__falling");
				$(".alien").addClass("alien--sprite__steady ");
			}
			// if(position <= 1019){
			// 	$(".alien").removeClass("alien--sprite__falling");
			// 	$(".alien").addClass("alien--sprite__steady ");
			// }
		}



	});
//gets rid of regular image of planet and shows layers that become draggable
$('img.planet-fg').on("mouseenter", function(){
	$('img.planet-fg').addClass("hidden");
	$('.frame').removeClass("hidden");
})

//NEW MOUSEENTER

var n = 0;
$( "div.enterleave" ).mouseenter(function() {
	$( "p:first", this ).text( "mouse enter" );
	$( "p:last", this ).text( ++n );
})
.mouseleave(function() {
	$( "p:first", this ).text( "mouse leave" );
});

// var waypoint = new Waypoint({
//  element: document.getElementById('waypoint'),
//  handler: function() {
//    document.body.className = "animate";
// }
 // },
 // offset: 25

// });

// var $shoe_zoom = document.querySelector(".round-button-circle");
// var $shoe_mode2= document.querySelector(".shoe");

// var $yellow_btn= document.querySelector(".yellow_button");
// var $pink_btn= document.querySelector(".pink_button");
// var $red_btn= document.querySelector(".red_button");
// var $blue_btn= document.querySelector(".blue_button");
// var $shoe_mode= document.querySelector(".shoe_container");

// var $logo= document.getElementById("logo_black");
// var side_shoe = document.getElementById("shoe-side");
// var back_shoe = document.getElementById("shoe-back");
// var front_shoe = document.getElementById("shoe-front");

// $logo.addEventListener("mouseover", function(){
	
// 	if( $shoe_mode.getAttribute("class")== "shoe_container pinkmode"){
// 		$logo.src = "media/img/tiger_logo_invert.png";
// 		$logo.style.transitionDuration = "0.5s";
// 	}
// 	if( $shoe_mode.getAttribute("class")== "shoe_container bluemode"){
// 		$logo.src = "media/img/tiger_logo_invert.png";
// 		$logo.style.transitionDuration = "0.5s";
// 	}
// 	if( $shoe_mode.getAttribute("class")== "shoe_container redmode"){
// 		$logo.src = "media/img/tiger_logo_invert.png";
// 		$logo.style.transitionDuration = "0.5s";
// 	}
// 	if( $shoe_mode.getAttribute("class")== "shoe_container"){
// 		$logo.src = "media/img/tiger_logo.png";
// 		$logo.style.transitionDuration = "0.5s";
// 	}
// 	// $logo.src = "media/img/tiger_logo.png";
// 	// $logo.style.width= 200 + "px";
// 	// $logo.style.height= "auto";
// 	// $logo.style.padding= 0 + "px";
// 	// $logo.style.margin= -20 + "px";
// });

// $logo.addEventListener("mouseout", function(){
// 	$logo.src = "media/img/onitsuka-tiger-logo.png";
// 	$logo.style.transitionDuration = "0.5s";
// 	// $logo.style.width= 120 + "px";
// 	// $logo.style.height= "auto";
// 	// $logo.style.padding= 20 + "px";
// 	// $logo.style.margin= 0 + "px";


// });

// $yellow_btn.addEventListener("click", function(){
// 	console.log("Button clicked");

// 	if( $shoe_mode.getAttribute("class") != "shoe_container"){
// 		$shoe_mode.setAttribute("class", "shoe_container");
// 		side_shoe.src = "media/img/shoe_side.png";
// 		front_shoe.src = "media/img/shoe_front.png";
// 		back_shoe.src = "media/img/shoe_back.png";
// 		side_shoe.style.transitionDuration = "0.5s";
// 		front_shoe.style.transitionDuration = "0.5s";
// 		back_shoe.style.transitionDuration = "0.5s";
// 	} else {
		
// 	}
// 	// $thing.setAttribute("class", "thing active");
	
// });

// $pink_btn.addEventListener("click", function(){
// 	console.log("Button clicked");

// 	if( $shoe_mode.getAttribute("class") != "shoe_container pinkmode"){
// 		$shoe_mode.setAttribute("class", "shoe_container pinkmode");
// 		side_shoe.src = "media/img/pink-shoe_side.png";
// 		front_shoe.src = "media/img/pink-shoe_front.png";
// 		back_shoe.src = "media/img/pink-shoe_back.png";
// 		side_shoe.style.transitionDuration = "0.5s";
// 		front_shoe.style.transitionDuration = "0.5s";
// 		back_shoe.style.transitionDuration = "0.5s";
// 	} else {

// 	}
// });

// $red_btn.addEventListener("click", function(){
// 	console.log("Button clicked");

// 	if( $shoe_mode.getAttribute("class") != "shoe_container redmode"){
// 		$shoe_mode.setAttribute("class", "shoe_container redmode");
// 		side_shoe.src = "media/img/red-shoe_side.png";
// 		front_shoe.src = "media/img/red-shoe_front.png";
// 		back_shoe.src = "media/img/red-shoe_back.png";
// 		side_shoe.style.transitionDuration = "0.5s";
// 		front_shoe.style.transitionDuration = "0.5s";
// 		back_shoe.style.transitionDuration = "0.5s";
// 	} else {
		
// 	}
	
// });
// $blue_btn.addEventListener("click", function(){
// 	console.log("Button clicked");

// 	if( $shoe_mode.getAttribute("class") != "shoe_container bluemode"){
// 		$shoe_mode.setAttribute("class", "shoe_container bluemode");
// 		side_shoe.src = "media/img/blue-shoe_side.png";
// 		front_shoe.src = "media/img/blue-shoe_front.png";
// 		back_shoe.src = "media/img/blue-shoe_back.png";
// 		side_shoe.style.transitionDuration = "0.5s";
// 		front_shoe.style.transitionDuration = "0.5s";
// 		back_shoe.style.transitionDuration = "0.5s";
// 	} else {
		
// 	}
	
// });

// $shoe_zoom.addEventListener("click", function(){
// 	console.log("Button pressed");

// 	if( side_shoe.getAttribute("id") != "shoe-side2"){
// 		side_shoe.setAttribute("id", "shoe-side2");
// 	} else {
// 		side_shoe.setAttribute("id", "shoe-side");
// 	}

// 	if( back_shoe.getAttribute("id") != "shoe-back2"){
// 		back_shoe.setAttribute("id", "shoe-back2");
// 	} else {
// 		back_shoe.setAttribute("id", "shoe-back");
// 	}

// 	if( front_shoe.getAttribute("id") != "shoe-front2"){
// 		front_shoe.setAttribute("id", "shoe-front2");
// 	} else {
// 		front_shoe.setAttribute("id", "shoe-front");
// 	}

	
// });

new WOW().init();
