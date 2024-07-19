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
