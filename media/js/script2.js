console.log("script2.js");

$(document).ready( function() {
  
  $(function() {

//     find the window.height, and check when it scrolls. when scroll is triggered, call the function to check if the animaition tags are there
  var $window           = $(window),
      win_height_padded = $window.height() * 1.1;
      $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop();
    //measure how far from the top you have scrolled
    var win_height_padded = $window.height() * 1.1;
    //add some padding

//     --- below is the meat --
//     when the .showFact class is seen, check to see if the data-animation tag has been triggered. If it hasnt, run through and call the class.
    // Showed...
    $(".showFact:not(.showFact_animate)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;
//       trigger the animation once the div is 25% away from the top of the window
      if (scrolled + (win_height_padded*.25) > offsetTop) {
        //win_height_padded = window height multiplied by 3/4 of space
        if ($this.data('timeout')) {
          window.setTimeout(function(){
//             this is just a backup, if something happens to the load, to run the animation anyways
            $this.addClass('transform' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          
          //add the animation class to the data-animation tag
          $this.addClass('transform ' + $this.data('animation'));
          
          // push to center - we arent using this, but I kept it in just in case
          // $(".person-1").animate({
          //       left: $(window).width() / 2,
          //       easing: 'easeOutCubic'
          //     }, 2000);
        }
      }
    });
    // check to see if the tag is on the page, if it isn't remove the tag !!! this only seems to work one way, it should reset but it doesnt work right now
   $(".showFact.transform").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('.transform')
      }
    });
  }

//     call the function 
  revealOnScroll();
});
  
  
  
  
  
  
  
//   $( 'button' ).click(function() {
// //  $( "div" ).toggle({ effect: "scale", direction: "horizontal" });
//   $('h1').toggleClass("transform");
//     // $('.nav-bullet').toggleClass("transform");
// });
  
  var currentPosition = 0;
	var slideWidth = 380;
	var slides = $('.slide');
	var numberOfSlides = slides.length;
	// Remove scrollbar in JS
	$('#slidesContainer').css('overflow', 'hidden');

	// Wrap all .slides with #slideInner div
	slides.wrapAll('<div id="slideInner"></div>')
	// Float left to display horizontally, readjust .slides width
	.css({
	    'float': 'left',
	        'width': slideWidth
	});

	// Set #slideInner width equal to total width of all slides
	$('#slideInner').css('width', slideWidth * numberOfSlides);

	// Insert controls in the DOM
    // ADDED CLASS 'nav' -->
	$('#slideshow')
	    .prepend('<span class="control nav" id="leftControl">Clicking moves left</span>')
	    .append('<span class="control nav" id="rightControl">Clicking moves right</span>');

    //BULLETS MANAGER - TO HIGHLIGHT THE ACTIVE BULLET ON CAROUSEL BUILT
    showBullets();

	// Hide left arrow control on first load
	// Create event listeners for .controls clicks
	
    //USE EVENT DELEGATION AS YOU HAVE DYNAMICALLY GENERATED NAV ELEMENTS
    $('#slideshow').on('click', '.nav', function (evt) {
	    evt.preventDefault();
	    // Determine new position
        // USE THIS.ID AS IT'S A BIT FASTER AND CLEANER
	    if (this.id == 'rightControl') {
	        if (currentPosition == numberOfSlides - 1) currentPosition = 0;
	        else currentPosition++;
	    } else if (this.id == 'leftControl') {
	        if (currentPosition == 0) currentPosition = numberOfSlides - 1;
	        else currentPosition--;

        //THE BULLETS RELATED CONDITION
        } else if($(this).closest("ul").is("#bullets")) {
            var $item = $(this).closest("li");
            currentPosition = $item.index();
        }
      
        //BULLETS MANAGER
        showBullets();

	    // Hide / show controls
	    // Move slideInner using margin-left
	    $('#slideInner').animate({
        //'transformOrigin': '50% 50%'
	        'marginLeft': slideWidth * (-currentPosition)
	    });
	});

    //THE BULLET MANAGER FUNCTION
    function showBullets() {
        var $bullets = $('#bullets');
        $bullets.find(".nav").removeClass('activeBullet');
        $bullets.find(".nav:eq(" + currentPosition + ")").addClass('activeBullet');
    }
    
});
/* - 08-3-16
	Plugin to make elements drag and drop, by adding .draggable to the image
	Dragged Elements dispatch these events: startdrag, stopdrag
*/
// var restart = document.getElementById("restart");

(function(){
	var imgStart = {};
	var mouseStart = {};

	var mouseCurrent = {};
	var mouseDistance = {};

	var imageCurrent = {};

	var $beingDragged;

	var startDragEvent = new Event("startdrag");
	var stopDragEvent = new Event("stopdrag");
  	var flyAwayEvent = new Event("flyaway");

	var startDrag = function() {
		console.log("start drag", this, event);

		event.preventDefault();

		$beingDragged = this;

		$beingDragged.dispatchEvent( startDragEvent );

		mouseStart.x = event.clientX;
		mouseStart.y = event.clientY;


		imgStart.left = parseInt(window.getComputedStyle(this).getPropertyValue("left"));
		imgStart.top = parseInt(window.getComputedStyle(this).getPropertyValue("top"));

		window.addEventListener("mousemove", doDrag);
	  window.addEventListener("mouseup", stopDrag);
	}

	var stopDrag = function(){
		window.removeEventListener("mousemove", doDrag);
    	console.log("stop drag", this, event);
    
	    // console.log(this);
	    // 'this' refers to the image element that was clicked, i.e. the thing with the event listener on it
	    TweenMax.to($beingDragged, .5, {left: "2000px", scale: '1.2'});
	};

	var doDrag = function(){
		// console.log("do drag", this, event);

		//how far has themouse moved
		mouseCurrent.x = event.clientX;
		mouseCurrent.y = event.clientY;

		mouseDistance.x = mouseCurrent.x - mouseStart.x;
		mouseDistance.y = mouseCurrent.y - mouseStart.y;

		// console.log(mouseDistance);

		imageCurrent.left = imgStart.left + mouseDistance.x;
		imageCurrent.top = imgStart.top + mouseDistance.y;

		$beingDragged.style.left = imageCurrent.left + "px";
		$beingDragged.style.top = imageCurrent.top + "px";

	}

  
  
	var $draggables = document.querySelectorAll(".draggable");

	for (var i = 0; i < $draggables.length; i++) {
		$draggables[i].style.position ="absolute";

		if(window.getComputedStyle($draggables[i]).getPropertyValue("top")=="auto"){
			$draggables[i].style.top=0 + "px";
		}
		if(window.getComputedStyle($draggables[i]).getPropertyValue("left")=="auto"){
			$draggables[i].style.left=0 + "px";
		}
		

		$draggables[i].addEventListener("mousedown", startDrag);
    
    // let the images themselves control their own mouse down and up behavior
    // don't assign event listeners multiple times
    // $draggables[i].addEventListener("mouseup", stopDrag);
	};

})();

