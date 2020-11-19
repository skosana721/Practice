const cars = ['benz', 'bmw', 'ford', 'audi', 'honda']
// accessing values
console.log(cars[3])

// reassigning values
cars[cars.length - 1] = 'lambo';


// finding the length of an array 
console.log(cars.length)

// find the nth value
console.log(cars[cars.length-1])


// Array Properties and Methods

// find length

let index = cars[cars.length - 1]
console.log(index)

// combine two arrays into one

let car = ['mazda', 'nissan', 'Honda']

let newArray = cars.concat(car)
console.log('array',newArray)

// reverse array order

let reversed = cars.reverse()
console.log(reversed)

// splice - mutates original array

let splicedArray = newArray.splice(3, 3)
console.log('splicedArray',splicedArray)