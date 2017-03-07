var SLIDER = SLIDER || {};


$(document).ready(function() {
	// show first image on doc ready
	$('img').eq(0).show();

	var currentSlideIndex = 0;
	var slideCount = $('img').length;
	console.log(slideCount);

	doSlides = function(direction){
		var direction = direction || 'next'; //sets a default to next if nothing is passed when func is called, 

	 	// hide whatever current slide is
	 	$('img').eq(currentSlideIndex).hide();

	 	if(direction === 'next'){
	 		// is this the last slide? 
	 		if(currentSlideIndex < slideCount - 1){
		 		// no? increase the currentSlideIndex by 1
				currentSlideIndex = currentSlideIndex + 1;
	 		} else {
	 			// yes? go back to beginning
	 			currentSlideIndex = 0;
	 		}
 		} else {
 			// is this the first slide?
 			if(currentSlideIndex === 0){
 				//go to last slide
 				currentSlideIndex = slideCount - 1;
 			} else {
				currentSlideIndex = currentSlideIndex - 1;
 			}
 		}

		$('img').eq(currentSlideIndex).show();
 		console.log(currentSlideIndex);
	};
	
	$('.js-next').on('click', function(){
		doSlides('next');
	});

	$('.js-prev').on('click', function(){
		doSlides('previous');
	});

	$('.js-play').on('click', function(){
		//keep this in the namespace
		SLIDER.autoPlay = setInterval(function(){
			doSlides('next');
		}, 1000);
		console.log(SLIDER.autoPlay);
	});

	$('.js-pause').on('click', function(){
		//clear the interval contained in autoPlay global var
		clearInterval(SLIDER.autoPlay);
	});

}); // close doc ready