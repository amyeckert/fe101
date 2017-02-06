// 1. Write a script that checks if a variable is less than or equal to 10. 
//If it is, alert the user that their variable is less than or equal to 10. 
//If it is not, using the console, let the user know that what the variable was and that it was greater than 10.

var number = 11;
if(number <= 10) {
	console.log('The number you chose is less than or equal to 10.');
} else {
	console.log(number + ' is greater than 10.');
}

// 2. Write a script that checks if a string stored in a variable is greater than 10 characters long. If it is, alert the user that their variable is greater than 10 characters long. If it is not, using the console, let the user know what the variable was, and that it was less than 10 characters long.

var myString = '\"The hyena is a carnivorous dog-like species of animal, native to parts of both Africa and Asia.\"';

if(myString.length >= 10) {
	alert(myString + ' This string has more than 10 characters.');
} else {
	console.log(myString + ' has less than 10 characters.');
}

//3. Write 3 different functions that each take an argument or two and return something via the console or an alert.
//a.
var findAreaOfSquare = function(width, height) {
	return area = (width * height);
}
console.log(findAreaOfSquare(12, 89));

//b.

var findAreaOfCircle = function(r) {
	const pi = 3.1415926535897932384626433832795028841971693993751;
	return area = pi * (r * r);
}
console.log(findAreaOfCircle(4));

//c. 
var findVolumeOfCylinder = function(r, h) {
	const pi = 3.14159;
	return volume = (pi * (r * r))* h;
}
console.log('The volume of this cylinder is ' + findVolumeOfCylinder(2, 4) + ' cubic cm.');


//4. Set up an array of verbs. Loop through the array using a for loop and insert the verbs into a sentence that stays constant for each iteration of the loop. Show the user each sentence using a console.log statement.

var verbs =['sleeping', 'travelling', 'reading', 'dancing', 'sparring' ];
var sentence = ' is my favorite thing to do. Wait. I mean -';

for(var i = 0; i < verbs.length; i++) {
	console.log(verbs[i] + sentence);
};