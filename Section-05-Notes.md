# JavaScript - The Complete Guide 2020 (Beginner + Advanced)

## 111 Module Introduction
- Behind the Scenes of JavaScript
- How It Works, the Weird Parts & ES5 vs ES6+

## 112 ES5 vs ES6+ ("Next Gen JS") - Evolution of JavaScript
- Remember, ECMAScript is the language behind JavaScript
- JavaScript is a specific version of ECMAScript (the most important version)
- ECMA International Body
- Get the URL
- Still under active development
- ES5 (and older)
  - Standardizations happened more here
  - Only "var" was available
- ES2015/ES6 (and newer)

## 113 var vs let and const
- let does not really use function/global scope

## 114 Understanding "Hoisting"
- Reading and Initializing Variables (var vs let/const)

## 115 Strict Mode
- 

## 116
- What does the browser do with code?
  - Whenever the browser encounters a script, it will execute it.
    - What does "execute the script" mean?
    - Differs per engine
    - PARSING and EXECUTING our code
      - Parsing = loading the code
      - Executing = ?
      - Interpreter | Loads Code, Starts Execution in a non-optimized way, hands bytecode to compiler
      - Compiler | Compiled to Machine Code, optimized, executed
    - Already compiled code is not necessarily compiled again
    - Browser APIs
      - Communication Bridges between JavaScript & Browser Logic (C++?)

## 117 Inside the JavaScript Engine
- Managing memory and managing execution steps
- Heap and Stack
- Heap
  - The browser manages the Heap
    - Taps into system memory, together with OS, memory allocation
    - Data gets stored (long-term data)
  - Stack
    - Short-term memory
    - Program flow
    - Monitors which function is executing
```javascript
function getName() {
    return prompt('Your Name: ', ''); // 2nd argument fills prompt's textbox
}

function greet() {

    const userName = getName(); // Acquires value of 2nd parameter of prompt function
    console.log('Hello ' + userName);

}

greet();
```
### Stack Activities
- Stack activities
  - Read this, starting from the bottom...numbered items
  - 08 Done with executables
  - 07 greet() continues running
    - once last line is executed, popped off the stack
  - 06 getName() returns data to greet(), and is popped off the stack
  - 05 When the user finishes with the dialog, the prompt() function is popped off the stack
  - 04 Technically, we call the prompt() function
    - Which I didn't write
    - Displays the dialog
  - 03 getName() function call
  - 02 greet() function call
    - The Stack is short-living data structure
    - Populated by pushing new function calls on to top, and popping them off when they're not required
    - The topmost item in the stack is the activity that's currently happening
  - 01 anonymous code execution (the script file itself)
    - JavaScript already evaluated the entire script
    - "Registered" variables and functions

  - Place a breakpoint and observe the Call Stack in Chrome Tools