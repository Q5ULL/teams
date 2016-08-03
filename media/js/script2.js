console.log("script2.js");

/* - 08-3-16
	Plugin to make elements drag and drop, by adding .draggable to the image
	Dragged Elements dispatch these events: startdrag, stopdrag
*/
var restart = document.getElementById("restart");

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
		// console.log("start drag", this, event);

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
    
    
	    // console.log(this);
	    // 'this' refers to the image element that was clicked, i.e. the thing with the event listener on it
	    TweenMax.to($beingDragged, .5, {left: "200%"});
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


// restart.onclick = function() {
//   tl.restart();
// }
// var timelinePhone = new TimelineMax({
// 	// repeat: -1, 
// 	// yoyo: true,
// 	paused: true,
// 	onUpdate: function() {
// 		console.log("done", timelinePhone.time());
// 		document.querySelector("#seekTo").value = timelinePhone.time();
// 	}
// }); //timeline-automatically runs in sequence, one after another in order

// timelinePhone.to("puzzle-piece", 0.75, {left: 740}, 0);
// });
