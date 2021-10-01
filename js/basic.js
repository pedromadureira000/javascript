/* Data types
undefined, null, boolean, string, symbol, number, and objects
*/

var myName = "Pedro"; // Will be globally or locally if declared inside a function. / Can declare twice

var myName = 8;

let ourName = "PH - Solucoes Web";  // Work in block {} scope. / Can't declare twice
let ourName = 10  // get error
ourName = 10 // not return error

function catTalk() {
    "use strict";  // this string in the begining of function of file will enforce some security restrictions.
}

const PI = 3.14; // is read only / is block scope

// ------------------
// declaring  variable
var a;
console.log(a)

// initialize variable and assign
var b = 2;

// assign variables
a = 7
b = a

console.log(a)

// Declarations is camel case
var properCamelCase;

//--------------/Math
result = 10 / 3
result++; // incrementing
result--; // decrementing

console.log(result)

// Operation with decimals can return int:  2.0 * 2.5  == 5

//remainder
var remainder
remainder = 10 % 2;
console.log(remainder)

//operator +=, -=, *=, /=
remainder += 12

//---------------------/strings

// string scaping character
var myStr = "i am \" double quoted\" string "
// or use single quote
var myStr = '<a href="http://something.com>'

//leght
var somestring = "Mystring";
console.log(somestring.length)

// indexing
somestring[0] // like in python

//------------------------------------------/function
//---/ Comparison with the strict equality operator
// 6 == "6"  (True)  This make a type conversion
// 6 != "6" (False)
// 6 === "6"  (False)
// 6 !== "6" (True)

function testStrict(val) {
    if (val === 7) {
        return "Equeal";
    }
    return "Not Equal";
}
testStrict(10);

// 'and' statement
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
// 'or' statement

function testLogicalOr(val) {
    if (val <= 50 || val >= 25) {
        return "Yes";
    }
    return "No";
}

// 'if', 'else if' and 'else' statement
function testElseIf(val) {
if (val > 10) {
    return "Graten then 10";
  } else if (val < 5) {
    return "Smalller then 5";
  } else {
    return "Between 5 and 10"
  }
}

// Switch statement
function caseInSwitch(val) {
    var answer = ""
    switch(val) {
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
        case 3:
            answer = "Gamma";
        case 4:
            answer = "Delta";
        default:
            answer = "Stuff";
            break;
        }

        return answer;
}

// switch: multiple indentical options in switch statements
function caseInSwitch(val) {
    var answer = ""
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Case 1,2 and 3";
            break
        case 4:
        case 5:
        case 6:
            answer = "Case 4,5 and 6";
            break
        }

        return answer;
}

// -------------------/ Objects (like python dictionaries)
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
// Accessing values with dot notation
var dogName = ourDog.name;

// Accesing values with brackets notation
var dogLegs = ourDog["legs"]

// adding properties, or assign new values to properties in Object is like in python.

// delete propertie
delete ourDog.tails

// check if a object one specific property
dogLegs.hasOwnProperty("tails") // returns true or false

// access property in nested objects
var myObject = {
    "car": {
        "inside": {
            "glove box": "maps",
        }
    }
}
lookupfieds = myObject.car.inside['glove box'];

//--------/accessing nested arrays
var myArray = [
    {
        firstkey: "value",
        secondkey: [
            "value",
            "othervalue"
        ]
    }
]
othervalue = myArray[0].secondkey[1]


// function to create property

collections = {"5444": {
        "artist": "Robert Palmer",
        "tracks": []
    }
};
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collections[id][prop];
    } else if (prop === "tracks") {
        collections[id][prop] = collections[id][prop] || []; // create property or keep its value
        collections[id][prop].push(value);
    } else {
        collections[id][prop] = value;
    }
    return collections;
}
updateRecords(5444, "artist", "ABBA");


// ------------------------/ Loops
// While
var myArray = [];
var i = 0
while(i < 5) {
    myArray.push(i);
    i++;
}

// For
ourArr = [4,5,6]
for (var i = 0; i < 5; i++) { // inicialization, condition, final expression
    // is like python range
    ourArr.push(i)
}

for (var i = 0; i < 10; i += 2) { // even numbers
    // is like python range
    ourArr.push(i)
}

// iterate through an array with a For Loop
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.lenght; i++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal);

// iterate through nested arrays
function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]])
console.log(product)

// interate with Do while loops

var myArray = [];
var i = 10;

do { // this code will run one time at least
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);


// function exemple
var contacts = [
    {"firstName": "Pedro"},
    {"fistName": "Joao"}

]
function lookUpProfile(name, prop){
    for (var i=0; i < contacts.length; i++) {
        if(contacts[i].fistName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Sherlock", "FistName")

//-------------/ Ternary operator

function checkEqual(a,b) {
    return a === b ? true : false
    return a === b // this code do the same thing
}

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

//-----------/ Mutate an array declared with const
const s = [5, 6, 7]
s[0] = 3; // get no error


//----------/freeze a object (python dictionary)
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
    PI : 3.14
    };
    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS = 99;
    } catch( ex ) {  // this will catch errors
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

//-------/ Use Arrow functions to write concise anonymous functions
var magic = function() {
    return new Date();
}

const magic = () => new Date();

// With parameters

const myConcat = (arr1, arr2) => arr1.concat(arr2);
myConcat([1,3], [3,4,5]);

