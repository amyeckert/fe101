$(document).ready(function() {

	// attach click event to hamburger icon
	$('.js-menu').on('click', function(){
		$('.nav-main').slideToggle();
	})
	//a js breakpoint
	$(window).on('resize', function(){
		// get width of window
		var w = $(window).width();
		console.log('resizing window now ' + w);
		// if width > 420, do stuff
		if(w > 480 && $('.nav-main').is(':hidden')){
			$('.nav-main').removeAttr('style');	
		}else if ( w< 480 && $('.nav-main').is(':visible')){
			console.log('menu is still open');
			// $('.nav-main').removeAttr('style');
		}
	});


});// END of doc.ready()