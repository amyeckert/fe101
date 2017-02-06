$(document).ready(function() {
   // run ALL of this code when document is ready.
	var myFunction = function(){
		// alert('hidee ho!');
	}
	myFunction(); //call the function like so

	//anon func stored in var bake
	var bake = function(){
		console.log('Lets bake something!');
	}
	//anon func that accepts an argument, argument used as callback 
	var preHeatOven = function(whatsNext) {
		console.log('oven is at correct temp');
		// this is the callback, an argument called like a function
		whatsNext(); 
	}
	preHeatOven(bake); //func invoking a func

	//fade out body tag, then when done run function
	// $('body').fadeOut(5000, function(){
	// 	console.log('all done');
	// });

   //can pass an object with k:v pairs for other arguments
   // $('ul').fadeOut({duration: 5000});


   // select this element when you click on it, run this code, .on('mouseover, keydown, etc')
   $('.js-link').on('click', function(){
      $('.box').animate({
         opacity: 0.1,
         width: 600,
         height: '100vh'
      }, 3000, 'swing');

   });
// hide/show menu with callback 
   var showMenu = function(){
      console.log('animation done');
      $('.menu').animate({
         height: '10vh'
      })
   }
   $('.menu').show(showMenu);
  


}); // closes doc.ready();