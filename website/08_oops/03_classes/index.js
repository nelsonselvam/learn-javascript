/* CLASSES

    - ES6 Feature - provides structured and cleaner way to work with objects
    - use the keyword `class`to create a blueprint for an object
    - use the keyword `constructor` to create the properties of an object
    - declare functions within the class to create methods for an object, this DOES NOT REQUIRE the `function` keyword

*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Product: ${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 15.99);
product1.displayProduct();
console.log(`Total Price with Sales tax: ${product1.calculateTotal(salesTax)}`);
