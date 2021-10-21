function randomRanger(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRamdom = randomRanger(2,10)


function convertToInteger(str) {
    return parseInt(str, 2) // base 2 = binary
}

convertToInteger("10011")


//----/ arrow functions with high order functions(

realNumberArray = [5,6.7,-9.7,3.24, 14]
squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);

    return squaredIntegers;
}

//----/default arguments
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
/*  "Same function"
const increment = function (number, value = 1) {
        return number + value;
};
*/
increment(5,2);
increment(5);

//---------/ User rest operator with function parameters(python *args)
const sum = (function() {
    return function sum(...args) { // recive a variable number os arguments and put in a array
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1,2,3,4));

//-------/User the spread operator to evaluate Arrays in-place (like python tuples unpacking)
const arr1 = ['jan', 'feb', 'mar', 'apr', 'may'];
let arr2;
(function () {
    arr2 = arr1 // dont make a copy
    arr2 = [...arr1]; // spread out arr1 into arr2 (make a copy o values)
    arr1[0] = 'potato'
})();
console.log(arr2)

//-----/ use destructuring assignment to assign variable from objects
var voxel = {x: 3.5, y: 5.6, z: 6.76};

const { x: a, y: b, z: c} = voxel;


//------/ destructuring with array
const [z,x, , y] = [1,2,3,4, 5,6]
console.log(z, x, y)  // 1, 2, 4
let a = 8, b = 6;
(() => {
    "user strict";
    [a, b] = [b, a]
})();

//..
const source = [1,2,3,4,5,6]
function removeFirstTwo(list) {
    // const [a, b, ..arr] = list;
    const [, , ...arr] = list; // remove first 2 elements from array
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // [3,4,5,6]
console.log(source); // [1,2,3,4,5,6]


//-----------------------importing and exporting-----------------------


//-----/ understand the differences between import and require
import { capitalizeString } from "./string_function"
const cap = capitalizeString("hello!");


//-----/export functions and variables
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString};
export const foo = "foo";
export const bar = "bar";

//----import every thing from a file
import * as capitalizeStrings from "./capitalize_strings";

//----fallback export (used when you want to export only one thing froma file
export default function subtract(x,y) {return x - y;}
//this will be the one thing we're going to export from this file.

//----import a default export
import subtract from "math_functions"; //will no use {} to specify what you are importing