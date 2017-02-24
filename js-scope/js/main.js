// VARIABLE SCOPE ~ NOTES

//global scope- a variable that can be accessed from anywhere.
// outside of a function
var fname = 'fname is a global variable';

// local scope is when a variable
var showFirstName = function(fname){   
	console.log(fname); 
}

showFirstName('steve'); // Logs 'steve' because invoking function creates individual local scope
showFirstName('foo'); 
showFirstName('bar'); 
showFirstName('nuts'); 

console.log(fname); // fname is not defined- since it's defined within a function

var setGlobal = function(){
	buster = 'buster is global, no var in front'; //could be a mistake?
	var lucille = 'lucille is local';
	console.log(lucille);
};

setGlobal();

console.log(buster); // global- if you leave off var in front when inside a function. NOT good practice!

var setGlobalOnWindow = function(){
	window.oscar = 'oscar is global'; //using dot notation to modify window object. create a global variable from within a function
};

setGlobalOnWindow();
console.log(oscar);


// Precedence- if variables have same name, whatever variable is in the most local scope wins.
var fruit = 'apple'; //global scope

var showFruit = function(){   
	var fruit = 'orange'; //local scope
	console.log(fruit); 
}
showFruit(); // logs 'orange' 
console.log(fruit); //logs 'apple'


//********** FOR loops AND IF statements DO NOT CREATE LOCAL SCOPE !
var inBlock = false; //global

for (var i = 0; i < 5; i++) {
	var inBlock = true; // is global and changes the above var isnBlock, is NOT local
}
console.log('inBlock = ' + inBlock);

// ********** unless you use LET instead of VAR:

let notInBlock = false;

for (var i = 0; i < 5; i++) {
	let notInBlock = true; // is now global
}
console.log('notInBlock = ' + notInBlock);





