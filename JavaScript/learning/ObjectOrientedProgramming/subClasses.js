// subClasses

class Car {
  constructor(brand, model, year) {
    (this.brand = brand), (this.model = model), (this.year = year);
  }
  getInfo() {
    return `The ${this.brand} ${this.model} was released in ${this.year}`;
  }
  
}

// Magazine subClass

class Magazine extends Car{
    constructor(brand, model, year, type) {
        super(brand, model, year);
        this.type = type
        
    }
    
}

//Instantiate object 

const mag = new Magazine('Porsche', 'Cayman', '2020', 'Coupe')

