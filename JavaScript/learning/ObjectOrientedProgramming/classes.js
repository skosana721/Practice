//Classes

//Create Object
class Car{
    constructor(brand, model, year) {
        this.brand = brand,
        this.model = model,
        this.year = year
    }
    getInfo () {
        return `The ${this.brand} ${this.model} was released in ${this.year}`;
    }
    getAge () {
        const year = new Date().getFullYear() - this.year;
        return `${this.model} is ${year} years old`;
    }
    revise (newYear) {
        this.year = newYear
       this.revised = true 
    }

}

// Instantiate 

const car1 = new Car('Lamborghini', 'Aventedor', '2020')
