$(document).ready(function() {

	var modal = function(state) {
		//if state === 'open', fade in
		
		if(state === 'open') {
			$('.modal-container').fadeIn(function(){
				$('body').addClass('modal-on'); 
			});
		} 
		//else, fade it out
		else {
			$('.modal-container').fadeOut(function(){
				$('body').removeClass('modal-on');
			});
		}	
	};

	$('.js-modal-open').on('click', function(event) {
		event.preventDefault();
		modal('open');
		console.log('clicked to open modal');
	});

	//close the modal
	$('.close').on('click', function(event){
		event.preventDefault();
		modal('close');
	});

	// form behavior 
	$('.submit').on('click', function(event) {
		event.preventDefault();

		var uName = $('#username').val();

		if(uName == '') {
			console.log('don\'t submit');

		}
		
	});

});