//namespacing! store all functions, objects, etc inside one BIG object, so no conflicts with other libraries or code.
// One Page Website OPW, can be ALLCAPS for a Global object. Easier to read

// 1. 
var OPW = OPW || {}; //checks to see if this object already exists first, if not, create new object. If var OPW = 'foo'; existed, it would be overriden !

OPW.utilities = {
	listen: function(){
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
	},
} //End OPW

$(document).ready(function() {
	OPW.utilities.listen();

});// END of doc.ready()