//inheritance
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

// magazine constructor

function Magazine (brand, model, year, type) {
    Car.call(this, brand, model, year)
    this.type = type
}
// inherit prototypes

Magazine.prototype = Object.create(Car.prototype)

// Instantiate magazine

const mag1 = new Magazine('Audi', 'A7', '2019', 'Sportback')
console.log(mag1.getInfo())

// use Magazine constructor 

Magazine.prototype.constructor = Magazine