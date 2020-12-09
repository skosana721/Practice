// Object Literal

const car1 = { 
    brand: 'Mercedes Benz',
    model: 'E-Class',
    year: '2018',
    getSummary () {
        return `The ${this.brand} ${this.model} was released in ${this.year}`
    }
}


// Check for object values
const values =  Object.values(car1)



// Check for object keys
const keys = Object.keys(car1)
