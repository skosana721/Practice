// Submit Event

// submit event listener
// prevent default
// how to get a value

const form = document.getElementById('form')
const name = document.getElementById('name')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newName = name.value
    let newPassword = password.value
    const submitted = { name: newName , password:newPassword  }
    

})