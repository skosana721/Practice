// Object.create
// First create an object of the prototype

const carProto ={
 getInfo :function () {
   return `The ${this.brand} ${this.model} was released in ${this.year}`;
 },

getAge : function () {
   const year = new Date().getFullYear() - this.year;
   return `${this.model} is ${year} years old`;
 }
}
// create object
const car1 = Object.create(carProto, {
  brand: { value: "Hyundai" },
  model: { value: "Accent" },
  year: { value: "2017" },
});

