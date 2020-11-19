//filter
//does return a new array
//can manipulate the sized of new array
//returns based on condition

const people = [
    { name: "Prince", age: 30, job: "builder" },
  { name: "Jb", age: 23, job: "driver" },
  { name: "Sixty", age: 19, job: "plumber" },
  {name:'Steven', age:41, job:'manager'}
];

const builder = people.filter(person => person.job === 'builder')

const oldPeople = people.filter(person=>person.age >= 30)
console.log(oldPeople)