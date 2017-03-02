$(document).ready(function(){

	// set new data-attributes directly on the html element
	//changes do NOT update the DOM
	$('.snake').data();
	var mySnakeObject = $('.snake').data('error-msg');
	console.log(mySnakeObject);


	// multi-step js processing / game:
	var currentHealth = 100;
	// set players current health to 100 (set above) 
	$('.player').data('health', currentHealth);

	// Update the DOM with current health info 
	$('.player').text(currentHealth); // this WILL update the DOM, using .text();

	// leave off the var keyword to invoke from the console
	// put's it in global scope
	var attack = function(){     
		// when attack is invoked, immediately decrease currentHealth     
		var newHealth = currentHealth - 10;

	    // update players data     
	    $('.player').data('health', newHealth);

	    // update dom     
	    $('.player').text('Your current health is ' + newHealth);

	    // overwrite global var with new value    
	    currentHealth = newHealth;     
	};

	//reset the health value
	var reset = function(){
		currentHealth = 100;
		$('.player').text('Your current health is ' + currentHealth);

	};

	$('.js-attack').bind('click', function(){
		attack();
	    console.log('you have been attacked!') 

	});

	$('.js-reset').bind('click', function(){
		reset();
		console.log('play again!');


	});





}); //closes doc ready