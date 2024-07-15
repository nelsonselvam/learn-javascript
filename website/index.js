// This is a comment

/*

This is also a comment

*/

// output to console
console.log(`Hello World`);

console.log(`I love Coffee!`);

// to create alerts

// window.alert(`This is an alert`)
// window.alert(`Hello World!!`)

document.getElementById("myH1").textContent = `Hola!`;

document.getElementById("myP").textContent = `It's summer vibes everywhere!`;

/* VARIABLES
    variable declaration
    variables are dynamically typed
    keyword `let` helps to create new variables
    variable names are camelCased
*/

let fullName = `Bro Code`;
let age = 32;
let isCool = true;

isCool = isCool ? "Yes" : "No";

/* TEMPLATE LITERALS
    refer variables within text using ${variableName}
    ${refer variable name}  --> placeholder variable

*/

document.getElementById("p1").textContent = `Full Name is ${fullName}`;
document.getElementById("p2").textContent = `Age is ${age}`;
document.getElementById("p3").textContent = `Am I cool? ${isCool}`;

/* ARITHMETIC OPERATORS

    Operators (+ - * // ** %) that operate 
    on operands (values, variables etc.) 
    to perform arithmetic operations

    addition        :    +
    subtraction     :    -
    multiplication  :    *
    division        :    /
    exponentiation  :   **
    modulus         :   %

*/

let students = 30;

console.log(`Half the number of students is ` + students / 2);

/* AUGMENTED ASSIGNMENT OPERATORS
    
    - shortcuts for assigning operators. 
    - eliminates repeating variable names.
    - applies for all arithmetic operators.

*/

students += 10;
console.log(`Number of students when 10 more students join is ` + students);

/* INCREMENT AND DECREMENT OPERATORS   
    increment   : ++
    decrement   : --
*/

students--;
console.log(`Number of students when a student leaves is ` + students);

/* OPERATOR PRECEDENCE
    
    1. paranthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction

*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);

/* ACCEPTING USER INPUT
    
    1. EASY WAY : window prompt
    2. PRO WAY  : HTML text box
*/

// easy way

let username;
console.log(username); // outputs undefined as value is not defined

//username = window.prompt(`What is your name?`);
//console.log(username);

document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`;
};

/* TYPE CONVERSION

    when we accept user input, we might need to convert 
    the input data  type to a different value
    when a number datatype is not defined, it results in NaN (Not a Number)
    when a string datatype is not defined, it results in `undefined`

    converting an empty string to a boolean results in false. this is a way to check
    if the user has responded to an input prompt.

*/

//age = window.prompt("How old are you?")
age = Number(age); // without this, the age will be a string since input is always string
age += 1;

console.log(age, typeof age);

/* CONSTANTS

    creation of data container whose value cannot be changed.
    constant capitalization only for primitive datatypes
    and not for reference datatypes like string
    keyword: const

*/

const PI = 3.14;
let radius;
let circumference;

// uncomment the below for prompting
//radius = Number(window.prompt(`What is the radius of the circle?`));
circumference = 2 * PI * radius;

console.log(`circumference is ` + circumference);

document.getElementById("myButton1").onclick = function () {
  radius = Number(document.getElementById("myText1").value);
  circumference = 2 * PI * radius;
  window.alert(`circumference is ` + circumference);
};

/* MATH OBJECT

built-in JS Object that provides a collection of properties and methods

properites  :   PI, E
methods     :   round(), floor(), ceil(), trunc(), 
                pow(), sqrt(), log()
                sin(), cos(), tan() [Trignometric functions]
                abs()
                sign()
                max(), mix()
*/

//console.log(Math.PI);
//console.log(Math.E);

let x = 2;
let y = 3.756;
let z = 7;

// z = Math.round(y);  // round (> 3.5 gives 4, <3.5 gives 3 )
// z = Math.floor(y);  // round down
// z = Math.ceil(y);  // round up
// z = Math.trunc(y); // truncates the decimal points
// z = Math.pow(x, z); //   x to the power of z
// z = Math.sqrt(4)
// z = Math.log(z);
// z = Math.sin(1);
// z = Math.abs(y);
// z = Math.sign(x);
// z = Math.max(183, 78,96);
// console.log(z);

/* RANDOM NUMBER GENERATOR


*/

let randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);
