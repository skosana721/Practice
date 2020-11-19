// reduce
// iterates, callback function
// reduces to a single value - number, array, object 
// 1 parameters (acc) - total of all calculations
// 2 parameters (curr) - current iteration/value

const people = [
  { name: "Jb", age: 23, job: "driver", id: 1, salary: 6500 },
  { name: "Sixty", age: 19, job: "plumber", id: 2 ,salary: 3400},
  { name: "Prince", age: 30, job: "builder", id: 3, salary: 3500 },
    { name: "Steve", age: 41, job: "manager", id: 4, salary: 12000 },
];

const total = people.reduce((acc, curr) => {
 return acc+= curr.salary   
}, 0)
console.log(total)