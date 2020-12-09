// allows select dynamic elements
// event propagation - order the events are fired
// event bubbling  - clicked element first then bubbles up -- default

const container = document.querySelector('.container')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    const element = document.createElement('h1')
    element.classList.add('header')
    element.textContent = `Hello there`
    container.appendChild(element)
})

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('header')) {
        e.target.style.color = 'white'
        e.target.style.backgroundColor = 'black'
    }
})