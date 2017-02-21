$(document).ready(function(e) {

	//	form controls
	var userForm = document.getElementById('sign-up');
	var art = document.getElementById('add-image');
	const myId = 767; 
	var userId = 0;
	var listOfArt = document.getElementById('show-art');




	userForm.addEventListener('submit', function(event){
		//prevent form from submitting
		event.preventDefault();

		// get values of fields
		var firstName = $('#fname').val();
		var lastName = $('#lname').val();
		var email = $('#email').val();
		var password = $('#pword').val();
		// store 
		var newUser = [firstName, lastName, email, password];

		console.log('created new user!');
		
		createUser(firstName, lastName, email, password);
		console.table(newUser);
	
	});

	art.addEventListener('submit', function(event){
		event.preventDefault();
		
		// get url
		var url = $('#url').val();
		var title = $('#title').val();
		var $background = $('body');

		// console.log(url);

		$background.css('background-image', 'url("' + url  + '")');
		addPainting(myId, url, title);
		
	});
	// listArtworks
	listOfArt.addEventListener('submit', function(event){
		event.preventDefault();
		//get user by ID
		var userId = $('#user-id').val();
		console.log(userId);
		∆
		listPaintings(userId);

	});


// http://images.huffingtonpost.com/2012-08-18-GorillaSilverback6.jpg
// https://4.bp.blogspot.com/-LiAlf8oX1sU/UPQQyvOcP2I/AAAAAAAAEck/wmZk4jgN1VY/s1600/biscuit+doughnuts.jpg





}); //closes doc.ready()


