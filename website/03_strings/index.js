/* STRING METHODS
    
    methods to manipulate and work with text(strings) in JS
    charAt()        -   gives the character at specified position
    indexOf()       -   gives the index
    length          -   gives the length
    trim()          -   trim whitespaces before and after a text
    toUpperCase()   -   capitalize a text
    toLowerCase()   -   lower case a text
    repeat()        -   repeat text the specified number of times    
    startsWith()    -   check if string starts with a speficied value
    endsWith()      -   check if string starts with a speficied value
    includes()      -   check if string contains the specified value
    replaceAll()    -   replace all occurences of the specified value in a string
    padStart()      -   padding at the start of text to a specified length with a given padding value
    padEnd()        -   padding at the end of text to a specified length with a given padding value
    concat()        -   concatenate strings

*/

let userName = " LearnJS ";

console.log(userName.charAt(0)); // prints 'L' - the character at index 0
// console.log(userName.charAt(10)); //returns <empty string> - as there is no character at index 10
console.log(userName.indexOf("J")); // prints 5 - the index of the first occurrence of 'J'
// console.log(userName.indexOf("JS")); // also outputs 5 as J's index is taken into account
console.log(userName.length); // prints 10 - the length of the string
console.log(userName); // prints " LearnJS " - the original string
console.log(userName.trim()); // prints "LearnJS" - removes leading and trailing whitespaces
console.log(userName.toUpperCase()); // prints " LEARNJS " - converts the string to uppercase
console.log(userName.toLowerCase()); // prints " learnjs " - converts the string to lowercase
console.log(userName.repeat(3)); // prints " LearnJS  LearnJS  LearnJS " - repeats the string 3 times
console.log(userName.startsWith(" ")); // prints true - checks if the string starts with a space
console.log(userName.endsWith(" ")); // prints true - checks if the string ends with a space
let userPhone = "860-980-1234";
console.log(userPhone.includes("-")); // prints true - checks if the string contains a hyphen
console.log(userPhone.replaceAll("-", ".")); // prints "860.980.1234" - replaces all hyphens with dots
console.log(userPhone.padStart(15, "0")); // prints "00000860-980-1234" - pads the string with zeros at the beginning to a length of 15
console.log(userPhone.padEnd(15, "0")); // prints "860-980-123400000" - pads the string with zeros at the end to a length of 15

/* STRING SLICING

    creating a substring from a portion of another string
    string.slice(startIndex,endIndex) where end is exclusive

*/

const fullName = "VS Code";

let firsName = fullName.slice(0, 3); // extracts characters from index 0 to 2 (exclusive)
console.log(firsName); // prints "VS "

let lastName = fullName.slice(3); // extracts characters from index 3 to the end of the string
console.log(lastName); // prints "Code"

console.log(fullName.slice(-1)); // prints "e" - extracts the last character
console.log(fullName.slice(-3)); // prints "ode" - extracts the last 3 characters
console.log(fullName.slice(fullName.length - 1)); // prints "e" - extracts the last character using length property

firstName = fullName.slice(0, fullName.indexOf(" ")); // extracts characters from index 0 to the index of the first space
lastName = fullName.slice(fullName.indexOf(" ") + 1); // extracts characters from the index of the first space + 1 to the end of the string
console.log(firstName); // prints "VS"
console.log(lastName); // prints "Code"

let userEmail = "learnJs@vscode.com";
let email = userEmail.slice(0, userEmail.indexOf("@")); // extracts characters from index 0 to the index of the "@" symbol
console.log(email); // prints "learnJs"
let domain = userEmail.slice(userEmail.indexOf("@") + 1); // extracts characters from the index of the "@" symbol + 1 to the end of the string
console.log(domain); // prints "vscode.com"

/*  METHOD CHAINING

    calling one method after the another in one continuous line of code

*/

let username = window.prompt("Enter your username");

// without method chaining
username = username.trim(); // removes leading and trailing whitespaces
let letter = username.charAt(0); // extracts the first character
letter = letter.toUpperCase(); // converts the first character to uppercase
username = letter + username.slice(1); // concatenates the uppercase first character with the rest of the username
console.log(username); // prints the modified username

// with method chaining
username = window.prompt("Enter your username");
username = username
  .trim() // removes leading and trailing whitespaces
  .charAt(0)    // extracts the first character
  .toUpperCase()    // converts the first character to uppercase
  .concat(username.slice(1).toLowerCase()); // concatenates the uppercase first character with the rest of the username in lowercase
console.log(username); // prints the modified username
