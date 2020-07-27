let name = 'Doug'; // global
// let name = 'Aline'; // Two declarations will create a 'has already been declared error'

function greet() {
    
    let age = 30;
    let name = 'A redeclared, overridden, "shadow" variable';

    console.log('within the function', name, age);
}

// accessing the 'age' variable outside of the function causes an error here - using 'let'

console.log('outside the function', name); // this appears in the log first, then greet();
greet();

// https://blog.usejournal.com/awesome-javascript-no-more-var-working-title-999428999994
