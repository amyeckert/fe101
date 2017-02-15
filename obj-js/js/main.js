

//---------------------------------------------------------------------
// this is an object literal: 

var myCar = {
	brand: 'prius',
	wheels: 4,
	'has-leather': true,
	// a function stored in an objec is caled a METHOD. 
	honk: function(){
		console.log('beep!'); 
	}
};
//can access properties with .notation - console.log(myCar.brand);
// most common to use [] notation to access properties of an object.

// CONSTRUCTOR FUNCTIONS START with CAPS, creates objects. 
// 	types are not tightly policed in js like in php.
var Car = function(brand, wheels, leather) {
	// define this properties
	this.brand = brand;
	this.wheels = wheels;
	this.leather = leather;
	//this.color = 'blue';// if this is defined here, you can't change it with .prototype 

}
// Create a new instance of Car, known as car1:
var car1 = new Car('honda', 3, false);
var car2 = new Car('chevy', 5, true);

// PROTOTYPE extend objects after they have been defined. 
// a Prototype is the default definition of an object so when you add to the prototype you add to each instance.
// AFTER the fact, add a property to all Cars using it's prototype:

Car.prototype.color = 'red'; 
Car.prototype.honk = function(message) {
	console.log(message);
}
//modify color of an instance of Car, like make car1 green.:
car1.color = 'green';
car2.brand = 'tesla';

console.log(car1, car2);
car2.honk('lookout dude!');
car1.honk('hey pal...');
//----------------------------------------------------------
//create a constructor function that builds users:
var User = function(fname, lname){
	this.fname = fname;
	this.lname = lname;

}
//and an Admin constructor function that has all properties of User and extends it.
var Admin = function(fname, lname){
	this.isAdmin = true;
	User.apply(this, arguments); //this statement tells Admin to EXTEND User, using 'this' context and these 'arguments' herein 
}

Admin.prototype = new User(); //tells Admin to use User as its prototype

var amy = new User('amy', 'eckert');
var walter = new Admin('walter', 'marinovich'); //Admin and User are separated, so data not confused! !important.

//constructor function that extends another:
//this is the base prototye:
var Camera = function(brand, model, size) {
	this.brand = brand;
	this.model = model;
	this.size = size + 'mm';
}

var DigCam = function(brand, model, size) {
	this.isDigital = true;
	this.sensor = 'CMOS';
	Camera.apply(this, arguments); //this statement describes how to EXTEND Camera, with 'this' context and these 'arguments'.
}

var FilmCam = function(brand, model, size) {
	this.isFilm = true;
	this.lensIsFixed = false;
	Camera.apply(this, arguments);//this statement describes how to EXTEND Camera, with 'this' context and these 'arguments'.
}
// !IMPORTANT step! This APPLIES the extensions decribed in above. 
DigCam.prototype = new Camera();
FilmCam.prototype = new Camera();

var cam1 = new Camera('hassie', 'c330', '120');
var cam2 = new FilmCam('pentax', 'k1000', '35');
var cam3 = new DigCam('canon', 'd7', 'medium');

Camera.prototype.takePhoto = function(){
	console.log('click');
}
cam3.takePhoto();

var love = 'adrian';
console.log(love.fontsize());
// love.__proto__; in console will show all methods available



