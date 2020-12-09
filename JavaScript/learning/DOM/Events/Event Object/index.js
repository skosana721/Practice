//Event Object

//event object argument - e,event,evt
//event object triggered event
//event.type
//event.currentTarget
//this.keyword
//preventDefault() - prevent default behaviour

const heading = document.querySelector('h2')
const btn = document.querySelector('.btn')
const link = document.getElementById('link')

//event.type 

btn.addEventListener('mouseenter', (event) => {
    btn.style.backgroundColor = 'red'
    console.log(event.type)
})

// event.currentTarget

heading.addEventListener('click', (event) => {
    event.currentTarget.classList.add('color') 
})

// preventDefault

link.addEventListener('click', (event) => {
    event.preventDefault()
})