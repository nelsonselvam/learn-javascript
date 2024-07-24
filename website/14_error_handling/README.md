## ERROR HANDLING

    Error - An object that is created to represent a problme that occurs often with user input
    or establishing a connection

    - Network Errors
    - Promise Rejection
    - Security Errors

    Error Handling

    try { ... }     -   Encloses the code that might potentially cause the error
    catch { ... }   -   Catch and handle any thrown errors from try{}
    finally { ... } -   (Optional) Always executes. Used mostly for clean-up.
                        ex: file closure, connection closure, release resources etc.


    // example of error
    // console.lag("This will result in a type reference error");

    // console.log(x); // this will result in a uncaught reference error

``` javascript

// example 1 : uncaught referene error handling
try {
  console.log(x);
} catch (error) {
  console.error(error);
} finally {
  console.log("clean up!! - always executes");
}

// example 2 : user input error handling

try {
  const dividend = Number(window.prompt("Enter a number to divide by"));
  const divisor = Number(window.prompt("Enter a number to divide"));

  if (divisor === 0) {
    // manually throwing an error
    throw new Error("You can't divide by zero!!");
  } else if (isNaN(dividend) || isNaN(divisor)) {
    window.alert("Please enter a valid number");
    throw new Error("Please enter a valid number");
  }
  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
}

console.log("Reached the end of the program");

```