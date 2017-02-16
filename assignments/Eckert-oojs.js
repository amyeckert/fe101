// Create at least 3 JavaScript objects. Each object should have at least one method. Use the object literal method and the constructor function method at least once each to construct these objects. Instantiate the objects and exemplify your understanding of them through JavaScript code and comments.

//1. **************  Object literal  ************************
var robin = {
	commonName: 'American Robin',
	latinName: 'turdus migratorius',
	kingdom: 'animalia',
	phylum: 'chordata',
	class: 'aves',
	order: 'passeriformes',
	family: 'turdidae',
	range: 'North America',
	conservationStatus: 'least concern',
	chirp: function() {
		console.log('TWEEEEEEEEEETY TWEEET TWEET!');	
	}
}
// console log the Latin name of the American Robin
console.log(robin.latinName);
robin.chirp();

// 2. **************   Constructor Function  ************************
var EndangeredSpecies = function(commonName, latinName, range, conservationStatus, population) {
	this.commonName = commonName;
	this.latinName = latinName;
	this.range = range;
	this.conservationStatus = conservationStatus;
	this.population = population;
}

var easternLoggerheadShrike = new EndangeredSpecies('Eastern Loggerhead Shrike', 'Lanius ludovicianus migrans', 'North America', 'critically endangered', 70);

var ocelot = new EndangeredSpecies('Ocelot', 'Leopardus pardalis', 'Central and South America', 'least concern', 1000000);

var vaquita = new EndangeredSpecies('Vaquita', 'Phocoena sinus', 'Gulf of Mexico', 'endangered', 600);

// add some animal sounds for endangered species objects
EndangeredSpecies.prototype.roar = function() {
	console.log('ROOOOAAAAAARRRR!');
}
EndangeredSpecies.prototype.chirp = function() {
	console.log('Cheeeeeeeeeeeeep!');
}
// output some stuff
easternLoggerheadShrike.chirp();
ocelot.roar();

console.log(vaquita.latinName, ocelot.range, easternLoggerheadShrike.conservationStatus, ocelot.__proto__);
console.log('The ' + easternLoggerheadShrike.commonName + ' is '+ easternLoggerheadShrike.conservationStatus + ' in ' + easternLoggerheadShrike.range + ', with an estimated remaining ppopulation of only ' +easternLoggerheadShrike.population + ' individuals.');

// update the population of Ocelots based on new data
ocelot.population = 34000;
console.log(ocelot.population);


// 3.************** Extending an Object ************************
// base prototype
var House = function(color, floors, construction, isForSale, askingPrice) {
	this.color = color;
	this.floors = floors;
	this.construction = construction;
	this.isForSale = true;

	if(isForSale) {
		this.askingPrice = askingPrice;
	}
}
// define the extetion House prototype 
var Home = function(color, floors, construction, isForSale, yearsOccupied ) {
	this.yearsOccupied = yearsOccupied;
	House.apply(this, arguments);

	if(!isForSale) {
		this.askingPrice = 'This house is not for sale.';
	}
}
// apply the extended properties to House object
Home.prototype = new House();

//instantiate some houses and homes
var house1 = new House('blue', 6, 'stone', true, '$5.75');
var house2 = new House('green', 2, 'steel', true, '$8,000,000');
var home1 = new Home('white', 3, 'wood', false, 35);
var home2 = new Home('beige', 1, 'twigs', false, 0.5);

//log some stuff
console.log(house1, house2, home1, home2);
