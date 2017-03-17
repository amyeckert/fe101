// Write javascript that checks if a variable is less than 10. 

var number = 9;
// If it is, alert the user that their variable is less than 10. 
if(number < 10) {
	console.log('The number is less than 10');
// If it is not, let the user know what the variable was and that it was greater than 10.
} else if (number > 10) {
	console.log('The number is ' + number + ', which is greater than 10.');
} else {
	console.log(number);
}

var msg = "I love chocolate";
if(msg === "I hate chocolate") {
	console.log("gimme something else.");
} else if (msg === "I love chocolate") {
	console.log("gimme chocolate!");
} else {
	console.log('msg');
}

if('i love that' === 'i love that') {
	console.log('yup');
} else {
	console.log('nope');
}

if(number <= 10 && number >= 0) {
	console.log(number + ' is in the correct range');
} else {
	console.log('please chose a number between 1 and 10.')
}
//*************************
// Declare an anonymous function that takes no arguments but outputs
// something to the console. Invoke it after it has been declared

var whatIsThisThing = function() {
	console.log('This thing is a thing?');
}
whatIsThisThing();
// Declare a function that takes your ﬁrst name as an argument and alerts your name. 
// Invoke it after it has been declared

var myName = function(fname, lname) {
	return fname +' ' + lname;
}
console.log(myName('Adrian', 'Marinovich'));

// Declare a function that takes a "door" as an argument.
// Depending upon which "door" is provided, tell the user they've received a different "prize" in the console. 
// Invoke it a few times, with each door option.

var whatPrize = function(doorNumber) {
	if(doorNumber >= 1 && doorNumber <= 10) {
		console.log('your prize is a new car!');
	} else if(doorNumber>=11 && doorNumber <=20) {
		console.log('your prize is an ice cream cone!');
	} else if(doorNumber >=21 && doorNumber <=30) {
		console.log('you get nothing!');
	} else {
		console.log('please enter a number between 1 and 30');
	}
}
console.log(whatPrize(22));

// Create an array ﬁlled with several strings 
//Use a for loop to print out the names, followed by 'is my friend'.

var names= ['bob', 'sandra','cori', 'amy'];
for (var i = 0; i < names.length; i++) {
	console.log(names[i] + ' is in my family.');
}

//********* regex breakdown:*********//
// /^[a-z0-9]+$/i

// ^         start of string
// [a-z0-9]  a or b or c or ... z or 0 or 1 or ... 9
// +         one or more times (change to * to allow empty string
// $         end of string

// /i        case-insensitive


