//className
//classList

const textOne = document.getElementById('textOne')
const textTwo = document.getElementById("textTwo");
const textThree = document.getElementById("textThree");


// checking for the class value

const classValue = textOne.className
console.log(classValue)

// add a className to an element

textTwo.className = 'text-style'

// adding multiple classNames with classlist

textThree.classList.add('text', 'text-style')

// removing className

textThree.classList.remove('text')
