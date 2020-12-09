// constructor
// it can be used when you want to create multiple objects that shared the 
// same keys 

// constructor function

function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getInfo = function () {
        return `The ${this.brand} ${this.model} was released in ${this.year}`;
    }
}

// instantiate an object

const car1 = new Car('Mercedes Benz', 'E-Class', '2018')
const car2 = new Car('BMW', '5 series', '2019')
