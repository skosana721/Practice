// Click Event

// select element 
// addEventListener()
// What event and what to do

const button = document.querySelector('.btn')
const headingOne = document.querySelector('h1')
const pTag = document.querySelector('p')
const second = document.querySelector('.second')

button.addEventListener('click', () => {
    headingOne.classList.add('color')
    pTag.classList.add('colorTwo')
    document.body.style.backgroundColor = 'lightgrey'
    
})

// setting style property with condition
second.addEventListener('click', () => {
    if (!headingOne.classList.contains('colorThree')) {
        headingOne.classList.add('colorThree')
        
    } else {
        headingOne.classList.remove('colorThree')
        
    }
})