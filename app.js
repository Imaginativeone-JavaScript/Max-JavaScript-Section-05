// let name = 'Doug';  // global

// if(name === 'Doug') { // This IS a new BLOCK, but IS NOT a new FUNCTION
//     let hobbies = ['Sports', 'Cooking'];
//     console.log('within IF-statement', hobbies);
// }

// function greet() {
    
//     let age = 30;
//     let name = 'A redeclared, overridden, "shadow" variable';

//     console.log('within the function', name, age);
// }

// // accessing the 'age' variable outside of the function causes an error here - using 'let' AND 'var'

// console.log('outside the function', name); // this appears in the log first, then greet();
// // console.log('outside of IF-statement', hobbies);

// greet();

// // https://blog.usejournal.com/awesome-javascript-no-more-var-working-title-999428999994

// Redeclaring a variable in the same scope
// Declaring variables with no declaration keyword
// Use "Strict Mode"

"use strict";

let userName = 'Doug'; // let was added here
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#Changes_in_strict_mode