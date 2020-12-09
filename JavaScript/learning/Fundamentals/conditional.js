const students = [
  { name: "James", mark: 86 },
  { name: "James", mark: 49 },
  { name: "James", mark: 51 },
  { name: "James", mark: 98 },
  { name: "James", mark: 77},
];

// find the lowest mark
 
const lowestStudent =(students) => {
    let lowestMark=students[0].mark;
    for (let i = 0; i < students.length; i++) {
        if (lowestMark >students[i].mark) {
            lowestMark = students[i].mark 
            lowestMark = students[i]
        }
        
    }
    return lowestMark
}
console.log(lowestStudent(students))


const value = 19;
const value2 = 56;
if (value == value2) {
    console.log('Let will never happen')
} else {
    console.log('You idiot')
}

const num = false
if (!num) {
     console.log('num is false')
 }

// else if

const dice = 3;

if (dice === 1) {
    console.log('YOu got one ')

} else if (dice === 2) {
    console.log('You got two ')
} else if (dice === 3) {
    console.log('You got three')
} else if (dice === 4) {
    console.log('You got four ')

} else if (dice === 5) {
    console.log('You got five ')
} else if (dice === 6) { 
    console.log('You got six')
} else {
    console.log('You not roll the dice properly')
}
