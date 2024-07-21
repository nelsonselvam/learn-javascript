- extract values from arrays and objects & assign them to variables in a convenient way
- Array Destructuring `[]`
- Object Destructuring `{}`

``` javascript

// example 1 : swap values of variables
let a = 4;
let b = 7;

[a, b] = [b, a];

console.log(a);
console.log(b);

// example 2 : swap two elements in an array

const colors = ["red", "blue", "green", "yellow", "white"];

console.log(colors);

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// example 3 : assign array elements to variables

const [firstColor, secondColor, ...extraColors] = colors;

console.log(firstColor, secondColor, extraColors);

// example 4 : extract value from objects

const person1 = {
  firstName: "Thomas",
  lastName: "The Cat",
  age: 5,
  job: "Mouse Catcher",
};

const person2 = {
  firstName: "Major",
  lastName: "Glory Jr.",
  age: 5,
};

// here, we are destructuring an object into variables. if the value is not available in the object, we can assign a default value
const { firstName, lastName, age, job = "Undefined" } = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// example  5 : destructure in function parameters

function displayPerson({ firstName, lastName, age, job }) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

displayPerson(person1);

```