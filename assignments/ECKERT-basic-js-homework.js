

//Amy Eckert 1/27/17
// Create a "cheat sheet" JavaScript file that contains working examples with comments that contains:

// 1. Two variables with a number stored in each. 
// Add these numbers together and output the result to the console.

var reps = 435;
var sen = 100;
var congress = (reps + sen);
console.log(congress);

// 2. A variable with an array stored inside. 
//Output each item of the array using it's index, to the console.

var noble = ['helium', 'neon', 'argon', 'krypton', 'xenon', 'radon', 'ununoctium'];
console.log('The noble gasses in the periodic table are: ' 
	+ noble[0] +  ', ' + noble[1] +  ', ' + noble[2]  + 
	', ' + noble[3]  + ', ' + noble[4]  + ', ' + noble[5]  + ', and sometimes ' + noble[6] 
	+  '. ');

// 3. A variable with an object stored inside. 
//The object should contain several properties with different data types. 
//Output some of these properties to the console using dot notation.

var helium = {
	name: 'Helium',
	symbol: 'He',
	atomicNumber: 2,
	atomicWeight: 4.003,
	boilingPointCelcius:-268.93,
	colorOfGas: 'yellow',
	solidOnEarth: false
}
console.log('Scientists at Harvard have succeeded in converting ' + helium.name + 
	' (' + helium.symbol + ', number ' + helium.atomicNumber 
	+ ' on the Periodic Table) to metal.');



