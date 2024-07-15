/* IF...ELSE STATEMENTS
    if a condition is true, execute some code
    if not, do something else

    ifs can be nested
    ifs with conditions and boolean

*/

let age;

const myButton = document.getElementById("myButton");
const result = document.getElementById("result");

myButton.addEventListener("click", () => {
  age = Number(document.getElementById("myInput").value);

  if (age >= 18) {
    result.textContent = `You are allowed to enter this site!`;
  } else if (age < 0) {
    result.textContent = `Invalid age!! Age cannot be less than zero!!`;
  } else if (age == 0) {
    result.textContent = `You are just born!!`;
  } else if (isNaN(age)) {
    result.textContent = `Enter a valid age!!`;
  } else {
    result.textContent = `You must be 18+ to enter this site!!`;
  }
});

/* CHECKED PROPERTY
    
    property that determines the checked state of 
    a HTML checkbox or 
    radio button element


*/

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");

const submitBtn = document.getElementById("mySubmit");
const subscribeResult = document.getElementById("subscribeResult");
const paymentResult = document.getElementById("paymentResult");

submitBtn.addEventListener("click", () => {
  if (myCheckBox.checked) {
    subscribeResult.textContent = `You are subscribed!`;
  } else {
    subscribeResult.textContent = `You are NOT subscribed!`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with VISA`;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `You are paying with MasterCard`;
  } else if (payPalBtn.checked) {
    paymentResult.textContent = `You are paying with Paypal`;
  } else {
    paymentResult.textContent = `You are NOT paying!`;
  }
});

/* TERNARY OPERATOR

    shortcut to if...else statement
    helps to assign a variable based on a condition
    condition ? codeIfTrue : codeIfFalse

*/

age = 8;

console.log(age >= 80 ? "Age is equal greater than 80" : "Age is less than 80");

/* SWITCH CASE 

    when multiple if.. else statements are involved


*/

let day = "1";

switch (day) {
  case 1:
    console.log("Monday");
    break; // break out of switch
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default: // default behaviour
    console.log(`Invalid day ${day}`);
    break;
}
