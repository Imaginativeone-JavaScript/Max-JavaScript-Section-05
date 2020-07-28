# JavaScript - The Complete Guide 2020 (Beginner + Advanced)

## Section 05: Behind the Scenes & The (Weird) Past (ES3, ES5) & Present (ES6+) of JavaScript

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
    - Execution Context
      - Manages Program flow
        - Function calls and communication
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
  - JavaScript is single-threaded
    - does one thing at a time
  - The Event Loop
    - Helps with asynchronous code
    - Uses Event Listeners
    - Separate from (concurrent with?) the Call Stack

## 118 [DEEP DIVE] JavaScript Language vs Browser APIs
- In the last lectures, we covered the JavaScript engine and what it does inside of the browser. You also learned that there is a difference between the JS code execution and Browser APIs you might tap into during that execution.

- Essentially, you can split the code you write into these two pieces:

### 1) The JavaScript Language
- Understands core syntax (let, const etc) but does NOT know anything about the DOM for example

### 2) Browser APIs
- Not responsible for understanding your code (that's what 1) does) but instead responsible for exposing APIs like the DOM API which you can use from inside your script code.

- The JavaScript language (1) is advanced by the Ecma International Technical Committee 39 (TC39), which is a group that's part of the Ecma organization. It's responsible for adding new features to the JavaScript language itself. For example, in the past, it was responsible for adding let and const.

- You can learn more about TC39 here: https://tc39.es/

- And you can explore the current proposals that are being discussed by that group - features that potentially make it into the core JavaScript language in the future: https://github.com/tc39/proposals

- IMPORTANT: Just because a feature becomes part of the language does NOT mean that all JavaScript engines immediately support that feature. Of course the people developing the engines are doing their best to provide support as soon as possible but that process simply also takes time.

- On the other hand, engine vendors also sometimes start supporting certain features BEFORE TC39 made a feature an official part of JavaScript. Because in the end, it's of course totally up to the people working on the engines to decide which syntax their JS engine understands.

- Browser APIs also are standardized because the different browser vendors (Google for Chrome, Microsoft for Edge etc.) of course want to (roughly) provide feature parity and similar APIs. It wouldn't be a great developer experience if you had different functions which you need to call to make your scripts work in different browsers. Although, in the past, this was pretty normal.

- Nowadays, thankfully, this is getting way better because there also is a working group that works on browser APIs - so that different features and APIs in different browsers are avoided as good as possible.

- That working group has the name WHATWG and you can learn more about it here: https://whatwg.org/

- If you're interested in learning more about the APIs that were/ are "managed" by this group, you can check this site: https://spec.whatwg.org/

- This working group is not related to TC39!

## 119 Primitive vs Reference Values
- Two categories of Types/Values
  - Primitive Values, Reference Values
  - Primitive
    - Stored in memory (normally on The Stack)
      - variable stores value itself
      - relatively short-living
      - cheap to recreate
    - COPYING A VALUE (= assign to different variable) **copies the value** "by value"
    - Strings
    - Numbers
    - Booleans
    - null
    - undefined
    - Symbol
  - Reference
    - All other objects ("more expensive to create")
      - Stored in memory (The Heap)
      - Variable stores a pointer (address) to location in memory (reference)
      - Sometimes you want to make a COPY
```javascript
let person = {};
person.age = 30;

let anotherPerson = person;
anotherPerson.age = 32;

// person.age = 32; // person and anotherPerson point to the same reference

// In order to make a copy:
let yetAnotherPerson = { ...person };

// At first, yetAnotherPerson.age = 32
// If I change person.age to equal 30
person.age = 30;

// yetAnotherPerson.age = 32 and person.age = 30
```

**An important example involving constants:**
```javascript
const hobbies = ['Sports'];

hobbies.push('Cooking'); // does this make an error? No. It doesn't

// The POINTER ADDRESS is stored in the hobbies reference variable, not the data
// So, trying to make a new array hobbies = ['Sports', 'Cooking']; creates an error,
// but changing the data at &hobbies is permitted

// I still can't change primitives stored in constants.

// Back to objects:
// In the example with 'person' and 'anotherPerson', **person** stores the address and can't be
//   changed for a constant. **.age** CAN be changed...similar to what happened with the array
//   .push() function.
```

## 120 Garbage Collection and Memory Management
- How is the Heap Managed?
- The OS allocates only a certain amount of memory to Chrome
  - If that would be exceeded, that would kill Chrome
- V8's Garbage Collector
  - Periodically checks the Heap for unused objects (objects without references)
  - Removes unused objects