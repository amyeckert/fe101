 // this is an annoying alert
// console.log('javascript in the house!');

function change() {
	//function body

	document.getElementById("foo").innerHTML = "this is not the text";

};
//create variables:
var myName = "amy eckert";
var myNumber = 1;
var isThisForReal = true; //case-sensitive! lowercase!

//log value to console:
// console.log(myName);

var myArray = []; //empty array
var myObject = {}; //empty object

var peanuts = ['snoopy', 'lucy', 28, false, 400, 'another string']; //collection of data types

// console.log(peanuts[0]);

var things = [cookies, populations];
var otherThings = [['foo'], ['bar']];
var cookies = ['butter', 'chocolate chip', 'mint', false, 5, 45.7];
var populations = [50, 3567, 3.555, -4.89, 89, 1000000000000000];


// console.log(things[1][3], things[0][4]); 
// returns -4.89, 5

//OBJECTS store arrays of name/value pairs aka properties
var me = {
	firstName: 'amy',
	lastName: 'eckert',
	fingerCount: 10,
	interests: ['art', 'food', 'martial arts', 'travel']
};
console.log(me.firstName, me.interests[2], me.fingerCount); 



