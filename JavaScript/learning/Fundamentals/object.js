const person = {
    name: 'James',
    lastName: 'Smith',
    age: 18,
    hubbies: ['joying', 'gaming', 'skydiving'],
    hello: function () {
        console.log('Awesome ')
        
    }
}

// accessing object dot notation 

const name = person.name;
const age = person.age


// accessing object using bracket notation

const hubby = person.hubbies[2]
console.log(hubby)

// invoke function in object

person.hello();

// reassigning value in object

person.age = 19;

