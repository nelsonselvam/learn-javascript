/* CALLBACK HELL

    Situation in JS where callbacks are nested within other callbacks to the degree where the code is difficult to read.

    To avoid callback hell,

    Previous pattern - use async functions.
    New pattern      - use Promises + async/await
*/

// demo of callback hell
/*
function func1() {
  console.log("Task 1 complete");
}

function func2() {
  console.log("Task 2 complete");
}

function func3() {
  console.log("Task 3 complete");
}

function func4() {
  console.log("Task 4 complete");
}

console.log("All tasks complete");

// sync functions
func1();
func2();
func3();
func4();
*/

// making the above code async
function func1(callback) {
  // callback is added in order to make it synchronous
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 1200);
}

function func2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback();
  }, 1000);
}

function func3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete");
    callback();
  }, 3000);
}

function func4(callback) {
  setTimeout(() => {
    console.log("Task 4 complete");
    callback();
  }, 1500);
}

// func1();
// func2();
// func3();
// func4();
func1(() => {
  func2(() => {
    func3(() => {
      func4(() => {
        console.log("All tasks complete");
      });
    });
  });
});
// console.log("All tasks complete");
