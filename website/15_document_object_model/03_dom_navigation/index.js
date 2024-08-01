/* DOM NAVIGATION

    Process of navigating through the structure of a HTML document using Javascript.

    .firstElementChild
    .lastElementChild
    .nextElementSibling
    .previousElementSibling
    .parentElement
    .children

*/

//.firstElementChild

// selecting the first element child
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "red";
firstChild.style.color = "white";

// selecting the first element child in all lists

const lists = document.querySelectorAll("ul");
lists.forEach((list) => {
  list.firstElementChild.style.backgroundColor = "red";
  list.firstElementChild.style.color = "black";
});

// .lastElementChild

lists.forEach((list) => {
  list.lastElementChild.style.backgroundColor = "lightgreen";
  list.lastElementChild.style.color = "black";
});

// .nextElementSibling

const apple = document.getElementById("apple");
apple.nextElementSibling.style.backgroundColor = "orange";
apple.nextElementSibling.style.color = "black";

// .previousElementSibling

const jamun = document.getElementById("jamun");
jamun.previousElementSibling.style.backgroundColor = "pink";
jamun.previousElementSibling.style.color = "black";

// .parentElement

const appleElement = document.getElementById("apple");
const parentElement = appleElement.parentElement;
parentElement.style.backgroundColor = "brown";
parentElement.style.color = "black";

// .children
// selects all chiildren from the vegetable element
const vegElements = document.getElementById("vegetables");
const children = vegElements.children;

Array.from(children).forEach((child) => {
  child.style.backgroundColor = "lightblue";
  child.style.color = "black";
});
