/* WHILE LOOP

    executes based on a condition
    uses `break` keyword to exit from the loop

*/

let userName = "";

while (userName === "" || userName === null) {
//   userName = window.prompt("Please enter your name");  // commenting to avoid pop-ups
  break;
}

console.log(`Hello ${userName}`);

/* DO WHILE LOOP

    executes at least once
    check condition at the end


*/

let newUserName;

do {
//   newUserName = window.prompt("Please enter your name");
} while (newUserName === "" || newUserName === null);

console.log(`Hello ${newUserName}`);

/* login page validation - sample


*/

let loggedIn = false;
let uName;
let pwd;

while (!loggedIn) {
  uName = window.prompt("Enter username");
  pwd = window.prompt("Enter password");

  if (uName === "admin" && pwd === "nimda") {
    window.alert("Logged in as admin.")
    loggedIn = true;
  }
  else {
    window.alert("Invalid username or password");
  }
}


/* FOR LOOP

    repeat code for a certain amount of times

*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}