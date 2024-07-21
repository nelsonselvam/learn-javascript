/* ARRAY OF OBJECTS

   
*/

const fruits = [
  { name: "apple", color: "red", calories: 40 },
  { name: "papaya", color: "yellowish orange", calories: 126 },
  { name: "orange", color: "orange", calories: 50 },
  { name: "kiwi", color: "green", calories: 30 },
  { name: "banana", color: "yellow", calories: 109 },
];

// accessing an object in an array
console.log(fruits[0].name);

// add an object : use push method
fruits.push({ name: "grapes", color: "purple", calories: 45 });

console.log(fruits);

fruits.pop();

console.log(fruits);

// splicing
console.log(fruits.slice(1, 4));

// forEach()
fruits.forEach((fruits) => console.log(fruits.name));

// map
const fruitNames = fruits.map((fruits) => fruits.name);
console.log(fruitNames);

// filter
const redFruits = fruits.filter((fruits) => fruits.color === "red");
console.log(redFruits);

// reduce
const maxCalFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);

console.log(maxCalFruit);

const minCalFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);

console.log(minCalFruit.calories);