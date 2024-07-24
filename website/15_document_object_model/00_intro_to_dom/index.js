/* DOM

    Object{} that reperesents the page that is displayed in the web browser
    and provides an API to interact with it.
    Web Browser constructs the DOM when it loads an HTML element,
    and structures all the elements in a tree-like representation.
    JS can access the DOM to dynamically change the content, structure, and style of a web page.

*/

// to get an Element by Id
document.getElementById("");

// document is an object and will have properties and methods
// having nested objects
console.log(document);

// list all properties of the document object
console.dir(document);

// change the documen title
// document.title= "DOM";

// change the background color - toggle dark mode
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

const username = "Bro Code";
const welcomeMsg = document.getElementById("heading");

welcomeMsg.textContent = `Welcome ${username}`;

//
