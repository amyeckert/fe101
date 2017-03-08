
$(document).ready(function(){
	// $('[href]').on('click', function(){
	// 	console.log('clicked a link');
	// });

	var moveButton = $('.js-move-it');
	var thingToAnimate = $('.move-this');
	
	console.log(thingToAnimate, thingToAnimate2	);

	moveButton.on('click', function(){
		//thingToAnimate.classList.toggle('is-running');
		thingToAnimate.toggleClass('is-running');
	});


});// closes doc ready