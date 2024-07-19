/* FOR EACH

    method used to iterate over the elements of an array
    and apply a specified function (callback) to each element.

    array.forEach(callback)

    element, index, array are provided internally

*/

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

function display(n) {
  console.log(n);
}

function double(element, index, array) {
  array[index] = element * 2;
}

numbers.forEach(double);
numbers.forEach(display);

function square(element, index, array) {
  array[index] = Math.pow(element, 2);
}

numbers.forEach(square);
numbers.forEach(display);

let fruits = ["apple", "banana", "mango", "grape"];

fruits.forEach(display);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

fruits.forEach(upperCase);
fruits.forEach(display);

fruits = ["apple", "banana", "mango", "grape"];

function initCap(element, index, array) {
  array[index] = element[0].toUpperCase() + element.slice(1);
}

fruits.forEach(initCap);
fruits.forEach(display);
