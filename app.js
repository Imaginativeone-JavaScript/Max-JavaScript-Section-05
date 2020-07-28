function getName() {
    return prompt('Your Name: ', ''); // 2nd argument fills prompt's textbox
}

function greet() {

    const userName = getName(); // Acquires value of 2nd parameter of prompt function
    console.log('Hello ' + userName);

}

greet();
