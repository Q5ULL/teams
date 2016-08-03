// window.addEventListener("load", 

/* 	Melissa Sattler - 05-19-16
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

		// imgStart.left = this.style.left;
		// imgStart.top = this.style.top;
		imgStart.left = parseInt(window.getComputedStyle(this).getPropertyValue("left"));
		imgStart.top = parseInt(window.getComputedStyle(this).getPropertyValue("top"));

		//$0 int he DOM reference to the image you just clicked

		window.addEventListener("mousemove", doDrag);
		window.addEventListener("mouseup", stopDrag);
    window.addEventListener("mouseup", flyAway);
	}

	var stopDrag = function(){
    // window.addEventListener("mouseup", flyAway);
		window.removeEventListener("mousemove", doDrag);
    

		// $beingDragged.dispatchEvent( stopDragEvent );
    $beingDragged.dispatchEvent( flyAwayEvent );
    
		// window.removeEventListener("mouseup", stopDrag);
		// event.stopPropagation();
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
  //this is where I am trying to get the images to move individually
  var flyAway = function(){
  	var $beingDragged2 = $("img#bottle-planet");
  	
    console.log(this);
    var tl = new TimelineMax();
    // var tl2 = new TimelineMax();
    // var tl3 = new TimelineMax();
    tl.to( $beingDragged2, .1, {left:"200%", scale:1.4, transitionDuration: "5s"})
    // tl.to(".puzzle-piece:eq(1)", .1, {left:"50%", scale:1.4, transitionDuration: "1s"})
    // tl.to(".puzzle-piece:eq(2)", .1, {left:"50%", scale:1.4, transitionDuration: "1s"})
    // tl2.to(".puzzle-piece2", .1, {left:"50%", rotate:180})
    // tl3.to(".puzzle-piece3", .1, {left:"50%", rotate:180})
    // document.log("draggable", this, event);
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
		
		// $draggables[i].style.top=0 + "px";
		// $draggables[i].style.left=0 + "px";
		$draggables[i].addEventListener("mousedown", startDrag);
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
//Try to solve the mouse moving to fast problem
//Hint: the mouse has to be on the image, right now, to let go of it (mouseup) or move it (mousemove)



