// forEach
// does not return a new array

const people = [
  { name: "Jb", age: 23, job: "driver" },
  { name: "Sixty", age: 19, job: "plumber" },
  { name: "Prince", age: 30, job: "builder" },
];

const names = people.forEach(people => {
    return people.name
})

