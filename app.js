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

console.log(userName);

// var userName = 'Doug'; // undefined
let userName = 'Doug';    // Uncaught ReferenceError: Cannot access 'userName' before initialization

// Using var, invisible variables are created and moved to the top of the code! (Virtually)
// After the move, the variables are initialized to "undefined". This is var HOISTING

// Using let or const, invisible variables are created and moved to the top of the code! (Virtually)
// After the move, the variables are NOT initialized. This is let/const HOISTING

