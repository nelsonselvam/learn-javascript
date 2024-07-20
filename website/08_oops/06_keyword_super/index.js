/* SUPER KEYWORD

    - used in classes that is used to call the constructor or access the properties/methods of a parent(superclass)
    - helps in code reusability, any properties/methods that are common can be placed here.

*/

class Animal {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }

  move(speed){
    console.log(`${this.name} is moving at a speed of ${speed} mph.`)
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    // name & age are common props and hence can be moved to the super class and can be set using the super keyword which invokes the constructor of the parent class
    // this.name = name;
    // this.age = age;
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`${this.name} is running.`);
    super.move(this.runSpeed);
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    // this.name = name;
    // this.age = age;
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`${this.name} is swimming.`);
    super.move(this.swimSpeed);
  }
}

const rabbit = new Rabbit("Bugs Bunny", 1, 45);
console.log(rabbit.name);
rabbit.run();


