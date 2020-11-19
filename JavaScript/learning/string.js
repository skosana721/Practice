// String Properties and Method

let string = ' String Properties And Methods '

// find the length

let len = string.length
console.log('length-',len)

// making the string to lower case

let lowerCase = string.toLowerCase()
console.log('lowerCase-', lowerCase)

// making the string to upper case

let upperCase = string.toUpperCase()
console.log('upperCase-', upperCase)

// find the position of character/letter with index

let character = string.charAt(1)
console.log("char-", character)

// find the last character/letter 

let lastChar = string.charAt(string.length -2)
console.log('last-', lastChar)

// find the indexOf character/letter in a string

let index = string.indexOf('P')
console.log('index-', index)

// removing white beginning and end

let trimmed = string.trim()
console.log('string -', string)
console.log('trimmed-', trimmed)

// checking if the string start with a specific element

let starts = string.trim().toUpperCase().startsWith('STRING')
console.log(starts)

// checking if the string includes a specific element

let include = string.includes('h')
console.log(include)

// taking part of the string to create a new one

let slicedString = string.slice(0, 7)
console.log('sliced-', slicedString)