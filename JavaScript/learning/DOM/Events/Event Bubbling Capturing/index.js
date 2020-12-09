// allows select dynamic elements
// event propagation - order the events are fired 
// event bubbling  - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector('.container')
const list = document.querySelector('.list')
// event bubbling

list.addEventListener('click', (e) => {
    console.log('currentTarget', e.currentTarget)
    console.log('target', e.target)
})