/* CONSTRUCTORS

    - special method for defining the properties and methods for objects

*/

function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color),
    (this.drive = function () {
      console.log(`You are driving a ${this.color} ${this.make} ${this.model}`);
    });
}

const crosstrek = new Car("Subaru", "Crosstrek", "2022", "Icy Silver");
const mustang = new Car("Ford", "Mustang", "2021", "Red");
const eqc = new Car("Mercedes-AMG", "EQC", "2023", "White");

console.log(crosstrek.make);
console.log(mustang.make);
console.log(eqc.make);
eqc.drive();
