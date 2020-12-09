// getElementByClassName

// when you console.log it returns node-list which is an array-like object
// you can use index, length property but not array methods
// It is similar to the getElementByTagName but with getElementByClassName
// you can select multiple element

const items = document.getElementsByClassName('items')

items[0].style.color = 'orange'
items[2].style.color = 'purple'
items[3].style.background = 'blue'
items[3].style.color = 'gold'

