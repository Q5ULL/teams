// window.onload = function() {

// 	document.body.className = "animate";

// }
$(document).ready(function(){
	$('#scene').parallax();
	$('#scene2').parallax();


	$(".back-to-top__button").click(function(){
		console.log("scrollTo Works");
		$.scrollTo( $(".big-image"), 3000 );
		// $.scrollTo( 150, 2000 );//scroll to top: 150

	});
//makes cloud pollution slowly disappear
	$('.clouds').click(function() {
         // $(this).css( "opacity", "-=0.1" );
         // if($( '.img3' ).css( "opacity") >=1)
        $( '.img1' ).css( "opacity", "-=0.2" );
		$( '.img2' ).css( "opacity", "-=0.3" );
		$( '.img3' ).css( "opacity", "-=0.5" );
		$( '.img4' ).css( "opacity", "-=0.4" );
	});

});



$(function () { // wait for document ready
	// init
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

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
		
	var position_alien = $(window).scrollTop();
	var position = $(window).scrollTop();
	var position_backTop = $(window).scrollTop();
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
		if(position_alien >= 160){
			$(".alien").removeClass("alien--sprite__steady");
			$(".alien").addClass("alien--sprite__falling");
		}
		if(position_alien <= 160){
			$(".alien").removeClass("alien--sprite__falling");
			$(".alien").addClass("alien--sprite__steady");
		}
		if(position_alien >= 2080){
			$(".alien").removeClass("alien--sprite__falling");
			$(".alien").addClass("alien--sprite__steady");
		}
	}

	if ($(window).innerWidth() >= 0){
	// var $backToTop = document.querySelector(".back-to-top");

	// 	$backToTop.addEventListener("hover", function(){
	// 		$backToTop.style.left= 0 + "px";   
	// 	});

		if(position_backTop <= 8070){
			$(".back-to-top").css({"left": "-180px"});
			
		} else{
			$(".back-to-top").css({"left": "0"});
		}
		
	}

});

//gets rid of regular image of planet and shows layers that become draggable
$('img.planet-fg').on("mouseenter", function(){
	$('img.planet-fg').addClass("hidden");
	$('.frame').removeClass("hidden");
});


new WOW().init();
