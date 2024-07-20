/* OBJECTS

    - a collection of related properties and/or methods
    - can represent real world objects (people, products, places)
    - object- { key : value,
                function
                }

*/

const person1 = {
  firstName: "Marcus",
  lastName: "Aurelius",
  age: 32,
  isEmployed: false,
  saySomething: function () {
    console.log(
      "You have power over your mind - not outside events. Realize this, and you will find strength."
    );
  },
  quote: function () {
    console.log(
      "The happiness of your life depends upon the quality of your thoughts."
    );
  },
};

person1.quote();
person1.saySomething();

console.log(
  person1.firstName + " ",
  person1.lastName
);

const person2 = {
  firstName: "Rasta",
  lastName: "Populus",
  age: 45,
  isEmployed: false,
  saySomething: () => console.log("I will get you Tin Tin!!"),
};

console.log(person2.firstName + " ", person2.lastName);

console.log(person2.saySomething());
