/* ARRAYS

    a data structure that can hold more than one value

*/

let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);
console.log(fruits);
fruits[2] = "mango";
console.log(fruits);
fruits.push("grape");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("kiwi"); // add item to the beginning
console.log(fruits);
fruits.shift(); // remove item from the beginning
console.log(fruits);
console.log(fruits.length); //  print the number of elements in an array
console.log(fruits.indexOf("mango"));
console.log(fruits.indexOf("jackfruit"));

// BASIC FOR LOOP
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ENHANCED FOR LOOP
for (let f of fruits) {
  console.log(f);
}

// FOR EACH
fruits.forEach((f) => console.log(f));

// SORT
fruits.sort();
console.log(fruits);

// REVERSE
fruits.reverse();
console.log(fruits);

/* SPREAD OPERATOR

    operator is '...' 
    allows an iterable such as array or string to be expanded into separate elements
    unpacks the element

*/

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let max = Math.max(...numbers);
console.log(max); //

let userName = "LearnJs";
let letters = [...userName].join("-");
console.log(letters);

let vegetables = ["carrots", "asparagus", "kale"];

let foods = [...fruits, ...vegetables]; // can be used to combine arrrays
console.log(foods);

/*  REST PARAMETERS

      does the opposite of Spread Operator
      bundles individuals items into an array

*/

const food1 = "dosa";
const food2 = "idli";
const food3 = "vada";
const food4 = "chutney";

function openFridge(...foods) {
  console.log(foods);
}

openFridge(food1, food2, food3, food4);

function sum(...numbers) {
  let result = 0;
  for (let n of numbers) {
    result += n;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));

function getAverage(...numbers) {
  let average = 0;

  for (let n of numbers) {
    average += n;
  }
  return average / numbers.length;
}

console.log(getAverage(1, 2, 3, 4, 5));

function combineStrings(...string) {
  return string.join(" ");
}

console.log(combineStrings("Lord", "Jake", "Nichol", "IV"));
