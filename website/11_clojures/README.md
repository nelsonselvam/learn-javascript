
- A function defined inside of another function
- Inner function has access to the variables and scope
of outer function
- Allow for private variables and state maintenance
- Used frequently in JS frameworks: React, Vue Angular

``` javascript

function outer() {
  let message = "Hello!"; // encapsulated variable that makes it private

  function inner() {
    console.log(message);
  }

  inner();
}

message = "Goodbye";

outer();

// function increment(){
//   let count = 0;
//   count++;
//   console.log(`Count increased to ${count}`);
// }

// increment();
// increment();

function createCounter() {
  let count = 0;    // locally scoped, not available outside

  function increment() {
    // demoing to show state maintenance
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    // adding this method so that the local variable state is unaffected
    return count;
  }

  // return function as objects ; shorthand version
  return { increment, getCount };
}

const counter = createCounter();

counter.count = -190;  // testing if this will affect the count inside function 
console.log(counter.count); // does not

counter.increment();
counter.increment();
counter.increment();

console.log(`Current count is ${counter.getCount()}`);


```