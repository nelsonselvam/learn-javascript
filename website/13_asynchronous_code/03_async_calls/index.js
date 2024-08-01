/* ASYNCHRONOUS CODE

    synchronous code - code that runs line by line sequentially. it waits on previous operation to complete if any.

    asynchronous code - allows multiple operations to be performed concurrently without waiting
                        doesn't block the execution flow & allows programs to continue
                        (I/O operations, network requests, timers, etc.)
                        handled with: callbacks, promises, async/await

*/

/* CALLBACKS

    - A callback is a function passed as an argument to another function

    - This technique allows a function to call another function

    - A callback function can run after another function has finished

*/

/* BEFORE CODE
function func1(){
    setTimeout(() => console.log(1),3000);
}

console.log(2);
console.log(3);
console.log(4);
func1();

// BEFORE CODE */

function func1(callback) {
  setTimeout(() => {
    console.log(1);
    callback(); // forcing the callback to have better control over the sequence
  }, 3000);
}

function func2() {
  console.log(2);
  console.log(3);
  console.log(4);
}

func1(func2);
