/* MAP METHOD

    - accepts a callback and applies that function to each element of an array,
    then return the new array.

*/

const numbers = [2, 4, 6, 8, 10];

const squaresMap = numbers.map(squares);

console.log(squaresMap);

function squares(element) {
  return Math.pow(element, 2);
}

let students = ["Naruto", "Ino", "Sasuke", "Pinkara"];

let studentsUpper = students.map(upper);

console.log(studentsUpper);

function upper(element) {
  return element.toUpperCase();
}

const dates = ["2024-09-01", "2024-02-20", "2024-06-09"];

const formattedDates = dates.map(formatDate);

console.log(formattedDates);

function formatDate(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

/* FILTER METHOD

  - creates a new array by filtering out elements
*/

let numbers1 = [1, 2, 3, 4, 5, 6, 7];

function isEven(element) {
  return element % 2 === 0;
}

evenNumbers = numbers1.filter(isEven);

console.log(evenNumbers);

let fruits = ["mango", "pomegranate", "grape", "apple", "orange", "kiwi"];

function smallFruits(element) {
  return element.length < 7;
}

smallFruits = fruits.filter(smallFruits);

console.log(smallFruits);

/* REDUCE METHOD

    - reduces the elements of an array to single value

*/

const prices = [4, 5.67, 8, 45, 76, 45.54];

function sum(accumulator, element) {
  // previous, next
  return accumulator + element;
}

const total = prices.reduce(sum);

console.log(`total is: ${total}$`);

const grades = [100, 95, 90,75, 50, 65]

function max(accumulator, element) {
  return Math.max(accumulator, element)
}

const maxGrade = grades.reduce(max);

console.log(maxGrade);
