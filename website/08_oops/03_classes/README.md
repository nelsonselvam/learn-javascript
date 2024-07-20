- [ES6 Feature](https://www.w3schools.com/js/js_es6.asp) - provides structured and cleaner way to work with objects
- Use the keyword `class`to create a blueprint for an object
- Use the keyword `constructor` to create the properties of an object
- Declare functions within the class to create methods for an object, this DOES NOT REQUIRE the `function` keyword

``` javascript

// defining a class 

class Product {                  // make use of the `class` keyword
  constructor(name, price) {    // make use of the `constructor` keyword to create constructor . 
    // this can be initiated as const product1 = new Product("Gaming Console","399.99")
    this.name = name;
    this.price = price;
  }

  displayProduct() {                // define a method. this DOES NOT REQUIRE the `function` keyword
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

```