//getAttribute
//setAttribute

//getAttribute

const text = document.querySelector('.text')
const classValue = text.getAttribute('class')
console.log('class', classValue)
const link = document.querySelector('#link')
const linkValue = link.getAttribute('href')
console.log('link', linkValue)

//setAttribute 

const last = link.nextElementSibling;
last.setAttribute('class', 'text')
last.textContent = 'When I also have an attribute'
console.log(last)