// querySelector

// querySelector('any css') - selects single 
// querySelectorAll('any css) = selects all
// querySelector select any type of css 
// you can use array methods

// selecting a single item

const item = document.querySelector('.one')
item.style.color ='white'
const list = document.querySelector('#list')
list.style.background ='lightgrey'

// selecting many items

const listItems = document.querySelectorAll('.items')
listItems.forEach(item => {
    item.style.fontSize = '20px'
    item.style.color = 'red'
})

