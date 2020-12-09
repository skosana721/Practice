//Mouse Event

// click - fires after both the mousedown and mouseup 
// mousedown - button is pressed 
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const HeadingOne = document.querySelector('h2')
const btn = document.querySelector('.btn')

// click , mousedown and mouseup
btn.addEventListener('click', () => {
    console.log('You clicked')
})
btn.addEventListener("mousedown", () => {
  console.log('YOu pressed');
});
btn.addEventListener("mouseup", () => {
  console.log('You released');
});
//mouseenter and mouseleave

HeadingOne.addEventListener('mouseenter', () => {
    HeadingOne.classList.add('colorThree')
})
HeadingOne.addEventListener('mouseleave', ()=> {
    HeadingOne.classList.replace('colorThree', 'color')
})