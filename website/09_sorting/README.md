- Objects inside other objects
- represent complex data structures
- child object is enclosed by a parent object
- ex: `Person{Address{}, ContactInfo{}}`

``` javascript

const person = {
  firstName: "Marcus",
  lastName: "Aurelius",
  age: 32,
  hobbies: ["Writing Journals", "Meditating"],
  address: {
    street: "Emperor Lane",
    city: "Rome",
    country: "Roman Empire",
  },
};

console.log(person.hobbies[1]);
console.log(person.address.country);

//looping through an array object

for (const property in person.address) {
  console.log(person.address[property]);
}

// class with a complex object

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

class Person {
  constructor(name, age, ...address) {
    // use REST params for address
    this.name = name;
    this.age = age;
    this.address = new Address(...address); // create a new address using the address constructor
  }
}

const batman = new Person(
  "Bruce Wayne",
  32,
  "Wayne Manor",
  "Gotham City",
  "US"
);

console.log(batman);

console.log(batman.address.city);

```