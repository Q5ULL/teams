console.log("script2.js");

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
  	//console.log("flyaway", this, event);
  	
    var tl = new TimelineMax({
    	paused: true
    });
    var tl2 = new TimelineMax({
    	paused: true
    });
    var tl3 = new TimelineMax({
    	paused: true
    });

    $("img#bottle-planet1").on("mouseup", function(){
		tl.play();
	});
	document.querySelector("img#bottle-planet2").addEventListener("mouseup", function(){
		tl2.play();
	});
	document.querySelector("img#bottle-planet3").addEventListener("mouseup", function(){
		tl3.play();
	});

    
    tl.to("img#bottle-planet1", 1, {left:"200%", transitionDuration: "5s"});
    tl2.to("img#bottle-planet2", 1, {left:"200%", transitionDuration: "5s"});
    tl3.to("img#bottle-planet3", 1, {left:"200%", transitionDuration: "5s"});

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



