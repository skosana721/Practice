// function declaration
function greetings () {
    let name = ' Mat'
    let surname = ' Smith'
 console.log('hello ' + name + surname)
}
// invoking function 

greetings();

// functions - parameters and arguments

// using parameters

function hello (name) {
    console.log("Hello" + name)
}

// using arguments

// name1
hello(' john')

// name2
hello(' james') 

// name3
hello(' sung')

// function - return
const dollarToRand = 16;
function calculate (rand) {
    return rand * dollarToRand
}
console.log(calculate(14));

// function expression 

const multiple = function (num1, num2) {
    return num1 * num2;
}
