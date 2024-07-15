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

console.log(userName.charAt(0));
// console.log(userName.charAt(10)); //returns <empty string>
console.log(userName.indexOf("J"));
// console.log(userName.indexOf("JS")); // also outputs 5 as J's index is taken into account
console.log(userName.length);
console.log(userName);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));
console.log(userName.startsWith(" "));
console.log(userName.endsWith(" "));
let userPhone = "860-980-1234";
console.log(userPhone.includes("-"));
console.log(userPhone.replaceAll("-", "."));
console.log(userPhone.padStart(15, "0"));
console.log(userPhone.padEnd(15, "0"));

/* STRING SLICING

    creating a substring from a portion of another string
    string.slice(startIndex,endIndex) where end is exclusive

*/

const fullName = "VS Code";

let firsName = fullName.slice(0, 3);

console.log(firsName);

let lastName = fullName.slice(3); // ending index not required
console.log(lastName);

console.log(fullName.slice(-1));
console.log(fullName.slice(-3)); // from -1 to -3
console.log(fullName.slice(fullName.length - 1));

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);

let userEmail = "learnJs@vscode.com";
let email = userEmail.slice(0, userEmail.indexOf("@"));
console.log(email);
let domain = userEmail.slice(userEmail.indexOf("@") + 1);
console.log(domain);

/*  METHOD CHAINING

    calling one method after the another in one continuous line of code

*/

let username = window.prompt("Enter your username");

// without method chaining
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
username = letter + username.slice(1);
console.log(username);

// with method chaining
username = window.prompt("Enter your username");
username = username
  .trim()
  .charAt(0)    // continue to chain the methods
  .toUpperCase()    
  .concat(username.slice(1).toLowerCase()); // use string concatenation to glue  strings

console.log(username);
