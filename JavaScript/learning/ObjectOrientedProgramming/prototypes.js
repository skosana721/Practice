// prototypes
// using prototypes to pass in methods that you want to pass to specific
// object

// constructor function

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

//Prototype methods

// getInfo

Car.prototype.getInfo = function () {
return `The ${this.brand} ${this.model} was released in ${this.year}`;
};

// getAge

Car.prototype.getAge = function () {
    const year = new Date().getFullYear() - this.year
    return `${this.model} is ${year} years old`
}


// instantiate an object

const car1 = new Car('Mercedes Benz', 'E-Class', '2018')
const car2 = new Car('BMW', '5 series', '2019')
