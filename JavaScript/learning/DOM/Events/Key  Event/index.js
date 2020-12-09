//Key event

// keypress - when key is pressed 
// keydown - when key is down 
// keyup - when key is released

const input = document.querySelector('input')

input.addEventListener("keypress", () => {
  console.log("You pressed down a key");
});
input.addEventListener("keydown", () => {
    input.style.backgroundColor = 'red';
    
});
input.addEventListener("keyup", () => {
  console.log(input.value);
});