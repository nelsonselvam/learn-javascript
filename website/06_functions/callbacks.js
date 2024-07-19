console.log("------ LOG SEPARATOR ------");

/* CALLBACKS

    A callback is a function passed as an argument to another function.

    Used to handle asynchromnous operations:
      1. Reading a file
      2. Network requests
      3. Interacting with DBs

*/

function hello() {
  console.log("hello");
}

function goodbye() {
  console.log("goodbye");
}

/*
  In JS, functions are invoked in the order they are called. In the below example,
  there is no guarantee that the function results will be in order. If hello() takes time to execute, 
  then goodbye() will finish and then hello() will execute.

  In this case, we can add goodbye() as callback parameter to hello() and 
  invoke it within the hello() so that the former gets invoked only after hello()
  has completed.

*/
// hello();
// goodbye();

// rewriting with callbacks
hello(goodbye);

function hello(callback) {
  console.log("hello");
  callback(); // this will invoke goodbye()
}

function sum(pageDisplay, a, b) {
  let result = a + b;
  pageDisplay(result);
}

sum(pageDisplay, 3, 4);

function pageDisplay(result){
  document.getElementById("myH2").textContent = result;
}