// getElementByTagName('tagname)

// Selects element by the element name 
// when you console.log it returns node-list which is an array-like object
// you can use index, length property but not array methods

const headings = document.getElementsByTagName('h2')

headings[1].style.color = 'blue'

const items = document.getElementsByTagName('li')
items[2].style.backgroundColor = 'lightGrey'
items[3].style.fontSize = '20px'