// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement')
// insertBefore('element', 'location')
// replaceChild('new' , 'old')

const div = document.getElementById('div')
const first = document.querySelector('.color')

// creating an empty element

const bodySection = document.createElement('section')

// creating  text content

const text = document.createTextNode('This is the section of nothing')

// appending element 

bodySection.appendChild(text)
document.body.appendChild(bodySection)

// adding new element that has some text to the div

const headingThree = document.createElement('h3')
const headingText = document.createTextNode('An element create dynamically')
headingThree.appendChild(headingText)
headingThree.classList.add('element')
div.appendChild(headingThree)

// insertBefore

div.insertBefore(headingThree, first)

// replaceChild

const headingFive = document.createElement('h5')
const content = document.createTextNode(`The replacement of the bodySection`)
headingFive.appendChild(content)
headingFive.classList.add('element')
document.body.replaceChild(headingFive, bodySection)


