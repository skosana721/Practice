// find
// returns single instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value

const people = [
  { name: "Jb", age: 23, job: "driver", id:1 },
  { name: "Sixty", age: 19, job: "plumber",id:2 },
  { name: "Prince", age: 30, job: "builder",id:3 },
  { name:'Steve', age: 41, job:'manager',id:4}
];

const person = people.find(person => person.id === 4)


const personName = people.find(person => person.name === 'Sixty')
console.log(personName)