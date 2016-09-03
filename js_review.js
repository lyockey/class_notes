/********** ******* PRIMITIVES ********** ********/


//strings
var string1 = "I am a string";
var string2 = 'I am another string';

//numbers
var num = 0;
var num1 = 1;
var num2 = 45;
var num3 = -32;
var num4 = 3.14;

var num5 = '1000'; //CAUTION - This is actually a STRING!

// booleans
var bool1 = true;
var bool2 = false;

// null
var nullVar = null;

// undefined
var undefinedVar1 = undefined;
var undefinedVar2;
	//These variables say the same thing


/********** ******* COMPLEX TYPES (aka OBJECT TYPES) ********** ********/

// objects
var myObject = {
	key: 'value'
};

// arrays
var myArray = [1, 2, 3];
//			   0  1  2

// functions
var myFunction = function() {
	console.log('I am a function!');
};


/********** ******* ARRAYS AND OBJECTS IN DEPTH ********** ********/

//arrays = a list where you reference the objects by their position
// To reference in Console, use listOfThings[position];

var listOfThings = [
    'strings are an acceptable type',
	365,
	true,
	null,
	undefined,
	[1, 2, 3],
	{
		key: 'Lauren'
	},
	function mySpecialFunction() {
		console.log( 'hello' );
	}
];


var shoppingList = ['milk', 'ice cream', 'flour'];

var shoppingList2 = [
	'milk',
	'ice cream',
	'flour'
];

//objects = key value pairs
// To reference in console, use family.key; OR family["key"]

var family = {
	dad: 'value',
	mom: 'Beth',
	sister: 'Nicole',
	boyfriend: 'Josh',
	age: 23,
	isJavaScriptAwesome: true
};


var AdvWeb2 = {
	instructor: {
		fullName: 'Richard Kalehoff'
	},
	name: 'Advanced Web 2',
	numberOfStudents: 4,
	students: [
		{name: 'Allison', ufid: 112233, grades: [2, 1, 3]},
		{name: 'Jack', ufid: 445566, grades: [5, 4, 6]},
		{name: 'James', ufid: 778899, grades: [8, 7, 9]},
		{name: 'Barbara', ufid: 000000, grades: [1, 4, 9]}
	]
};
