// map
// does return a new array
// does not change size of original array
// use values from original array when making new one

const people = [
  { name: "Jb", age: 23, job: "driver" },
  { name: "Sixty", age: 19, job: "plumber" },
  { name: "Prince", age: 30, job: "builder" },
];
const job = people.map(person => {
     return person.job
})

const newPeople = people.map(person => {
  return {
    firstName: person.name.toUpperCase(),
    age: person.age + 15
  }
})
