// localStorage

// Web Storage Api - provided by browser 
// session storage, local storage
// setItem , getItem , removeItem, clear

//setItem

localStorage.setItem('name', 'smith')
localStorage.setItem('age', 23)

//getItem 

const name = localStorage.getItem('name')
// console.log(name)
const age = localStorage.getItem('age') 
    // console.log(age)

// removeItem

localStorage.removeItem('age')

// clear 

localStorage.clear()

// LocalStorage with multiple value

//JSON.stringify() - converts the value to JSON string 
//JSOn.parse() - convert the value back to their original form

const names = ['James', 'Xavier', 'Rick', 'Stephan']

const newNames = localStorage.setItem('NewNames', JSON.stringify(names))
console.log(newNames)

//JSON.parse()

const getName = JSON.parse(localStorage.getItem('NewNames'))
console.log(getName[3])