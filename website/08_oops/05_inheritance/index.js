/* INHERITANCE

    - allows a new class to inherit properties & methods from an inhereting class (parent -> child)
    - helps with code reusability
    - children classes use `extend` keyword to inherit the properties/methods of the parent class

*/

class Animal {
  alive = true;

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

class Rabbit extends Animal {
  name = "Rabbit";

  run() {
    console.log(`${this.name} is running.`);
  }
}

class Fish extends Animal {
  name = "Fish";
  
  swim() {
    console.log(`${this.name} is swimming.`);
  }
}

const rabbit = new Rabbit();
rabbit.eat();
rabbit.sleep();
console.log(rabbit.alive);

const fish = new Fish();
fish.eat();
fish.sleep();
console.log(fish.alive);
