/*  ARROW FUNCTIONS

      - concise way to write functions
      - good for simple functions that are used only once
      - (params) => some code


*/

/* regular function declaration

    function hello(){
      console.log("hello");
    }

*/

const hello = () => console.log("I'm an Arrow Function");

//invoke the function
hello();

// arrow function with params
const helloParams = (name) => console.log(`I am an Arrow Function, ${name}!!`);

helloParams("Jane");

// another example with an existing function

setTimeout(() => console.log("Printing after 4 secs!!!"), 4000);

// using arrow functions with map, filter & reduce methods

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

const evenNumbers = numbers.filter((element) => element % 2 == 0);
console.log(evenNumbers);

const sum = numbers.reduce((accumulator, element) => accumulator + element);
console.log(sum);
