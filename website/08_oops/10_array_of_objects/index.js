/* THIS KEYWORD

    - reference to the object where `this` is used
    - object depends on immediate context
    - for example: person.name = this.name
    - will not work with arrow functions
*/

const person1 = {
  firstName: "Marcus",
  lastName: "Aurelius",
  age: 32,
  isEmployed: false,
  saySomething: function () {
    console.log(
      // accessing using the this keyword
      `${this.firstName} ${this.lastName} once said "You have power over your mind - not outside events. Realize this, and you will find strength."`
    );
  },
  quote: function () {
    console.log(
      `${this.firstName} ${this.lastName} once quoted "The happiness of your life depends upon the quality of your thoughts."`
    );
  },
};

person1.saySomething();
person1.quote();
