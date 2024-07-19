/* FUNCTIONS

    any repeatable set of code is moved under a new block called function
    this block of code has to be invoked by calling it's name

*/

/* FUNCTION WITH NO ARGUMENTS & NO RETURN VALUE


*/
function hello() {
  window.alert("HELLO!!!");
}
// invoking the function
hello();

/* FUNCTION WITH ARGUMENTS  & NO RETURN VALUE

*/
function happyBirthday(userName, age) {
  console.log(`Happy Birthday to ${userName}!!`);
  console.log("Happy Birthday to you!!");
  console.log("Happy Birthday dear you!!");
  console.log(`You are ${age} years old!!`);
  console.log("Happy Birthday to you!!");
}

// invoking the function
happyBirthday("Mel", 32);
happyBirthday("Rick", 60);

/* FUNCTION WITH ARGUMENTS  & A RETURN VALUE

*/

function add(a, b) {
  return a + b;
}

add(2, 3);
console.log(`result of adding 2 and 3 is ${add(2, 3)}`);

function isEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(isEven(2343));

/* VARIABLE SCOPING

    where a variable is declared and is accessible
    scopes : local vs global

*/

//global scope - accessed everywhere
let globalX = 1;
//let x = 2; // not allowed

function scopedVariable() {
  let localX = 2; // locally scoped within this function
  return localX + 2;
}

function accessGlobalVariable() {
  //localX++;  // this will result in uncaught reference error
  return globalX;
}

console.log(scopedVariable());
console.log(x);
console.log(accessGlobalVariable());
