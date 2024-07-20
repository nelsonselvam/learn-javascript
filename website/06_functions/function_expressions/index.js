/* FUNCTION EXPRESSION

    - way to define functions as values or variables
    - used in:
        - callbacks in async functions
        - Higher Order Functions (HOF)
        - Clojures
        - Event Listeners

*/

/* regular function declaration

    function hello(){
      console.log("hello");
    }

*/

// declaring a function expression

const hello = function () {
  console.log("hello");
};

hello();

//setTimeout(callback, timeInMilliSeconds)
setTimeout(hello, 3000);

// this can also be re-written as below

setTimeout(function () {
  console.log("hello");
}, 3000);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

console.log(squares);

// example with an arrow function
const squares1 = numbers.map((element) => Math.pow(element, 2));

console.log(squares1);

const evenNumbers = numbers.filter(function (element) {
  return element % 2 === 0;
});

console.log(evenNumbers);

const evenNumbers1 = numbers.filter((element) => element % 2 === 0);

console.log(evenNumbers1);
