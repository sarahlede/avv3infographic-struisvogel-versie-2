var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger0", // point of execution
  duration: $(window).height() - 5, // pin element for the window height - 1
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin("#pinned-element0") // the element we want to pin
.addTo(controller);

// Scene1 Handler
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger1", // point of execution
  duration: 400 // pin the element for a total of 400px
})
.setPin("#pinned-element1") // the element we want to pin
.addTo(controller);

// Scene2 Handler
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger2", // point of execution
  duration: 400 
})
.setPin("#pinned-element2") // the element we want to pin
.addTo(controller);

// Scene3 Handler
var scene3 = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger3", // point of execution
  duration: 400 // pin the element for a total of 400px
})
.setPin("#pinned-element3") // the element we want to pin
.addTo(controller);

// Scene4 Handler
var scene3 = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger4", // point of execution
  duration: 300 // pin the element for a total of 400px
})
.setPin("#pinned-element4") // the element we want to pin
.addTo(controller);

var complete = function () {  
  var tleye = new TimelineMax({repeat: -1});

  tleye.set('#pupil, #oog', { transformOrigin: 'center' })
    .to('#pupil', 0.6, { scaleY: 0, ease: Power2.easeIn }, 8)
    .to('#oog', 0.6, { scaleY: 0.8, ease: Power2.easeIn }, 8)
    .to('#pupil,#oog', 1, { scaleY: 1, ease: Power2.easeOut });

  tleye.timeScale(4);
  
  var tlwing = new TimelineMax({delay: 2.5, repeat: -1});

  tlwing.set('#vleugel', { transformOrigin: 'top', delay: 2 })
  .to('#vleugel', 0.2, { scaleY: 0.5, ease: Power2.easeIn })
  .to('#vleugel', 0.2, { scaleY: 1, ease: Power2.easeOut });
  
  tlwing.timeScale(1);
  
  var tlvogelbounce = new TimelineMax({repeat: -1});

  tlvogelbounce.set('#vogel', { transformOrigin: 'bottom' })
  .to('#vogel', 0.4, { scaleY: 0.99, ease: Power2.easeIn })
  .to('#vogel', 0.4, { scaleY: 1, ease: Power2.easeOut });
};

var tlvogel = new TimelineMax();
tlvogel.set('#the-vogel', { x: 100 })
	.to('#the-vogel', 1, {
		y:150, 
		opacity:1, 
		ease: Bounce.easeOut,
		onComplete: complete
});

var tlbloed = new TimelineMax();
tlbloed.set('#the-bloed-zwart', { x: 100, transformOrigin: 'bottom' })
	.to('#the-bloed-zwart', 1, {
		y:150, 
		opacity:1, 
		ease: Bounce.easeOut
});

var tlbotten = new TimelineMax();
tlbotten.to('#the-botten-zwart', 1, {
		y:150, 
		opacity:1, 
		ease: Bounce.easeOut
});

var tlhart = new TimelineMax();
  var speed = 0.2;
  tlhart.to('#hart', 1, { 
  	scaleX:1.2, 
  	scaleY:1.3, 
  	transformOrigin: 'center',
  	ease:Elastic.easeOut, 
  	repeat:-1, 
  	repeatDelay:speed
});

var tlvogelbotten = new TimelineMax({ repeat:-1 })
tlvogelbotten.set('#the-botten-zwart', { transformOrigin: 'bottom' })
  .to('#the-botten-zwart', 0.4, { scaleY: 0.99, ease: Power2.easeIn })
  .to('#the-botten-zwart', 0.4, { scaleY: 1, ease: Power2.easeOut });

var tlglas = new TimelineMax({ repeat:-1 })
tlglas.set('#the-vergrootglas', { x:100 })
.to('#the-vergrootglas', 1, { rotation:20, transformOrigin: '10% 90%', ease: Power2.easeInOut })
.to('#the-vergrootglas', 1, { rotation:0, transformOrigin: '10% 90%', ease: Power2.easeInOut })
.to('#the-vergrootglas', 1, { rotation:-20, transformOrigin: '10% 90%', ease: Power2.easeInOut })
.to('#the-vergrootglas', 1, { rotation:0, transformOrigin: '10% 90%', ease: Power2.easeInOut });

// Vogel eet
var tlwing = new TimelineMax({
	delay: 2.5,
	repeat: -1
});

tlwing.set('#vleugel_x', {
  transformOrigin: 'top'
})
.to('#vleugel_x', 0.2, {
  scaleY: 0.5,
  ease: Power2.easeIn
})
.to('#vleugel_x', 0.2, {
  scaleY: 1,
  ease: Power2.easeOut
});

var tlvogelbounce = new TimelineMax({
	repeat: -1
});

tlvogelbounce.set('#vogel_x1', {
  transformOrigin: 'bottom'
})
.to('#vogel_x1', 0.2, {
  scaleY: 0.99,
  ease: Power2.easeIn
})
.to('#vogel_x1', 0.2, {
  scaleY: 1,
  ease: Power2.easeOut
})
.to('#snavelboven_x', 0.5, {
  rotation: -20,
  transformOrigin: 'left',
  scale: 1.1,
  x: -5,
  ease: Power2.easeInOut
}, 'label')
.to('#snavelonder_x', 0.5, {
  rotation: 20,
  transformOrigin: 'left',
  scale: 1.1,
  x: -4,
  ease: Power2.easeInOut
}, 'label');

var tleye2 = new TimelineMax({
  repeat: -1
});

tleye2.set('#pupil_x, #oog_1_', {
    transformOrigin: 'center'
  })
  .to('#pupil_x', 0.6, {
    scaleY: 0,
    ease: Power2.easeIn
  }, 8)
  .to('#oog_1_', 0.6, {
    scaleY: 0.8,
    ease: Power2.easeIn
  }, 8)
  .to('#pupil_x, #oog_1_', 1, {
    scaleY: 1,
    ease: Power2.easeOut
  });

tleye2.timeScale(4);