/* ELEMENT SELECTORS

    Methods used to target and manipulate HTML elements
    Allow to select one or more elements from the DOM

    Selector                                    Return Type
    1. document.getElementById()            //  ELEMENT OR NULL
    2. document.getElementsByClassName()    //  HTML COLLECTION
    3. document.getElementsByTagName()      //  HTML COLLECTION
    4. document.querySelector()             //  ELEMENT OR NULL
    5. document.querySelectorAll()          //  NODELIST

*/

/* 

    document.getElementById() 

*/

// get the heading element by it's id (heading, in this case) and assign it to a variable
const myHeading = document.getElementById("heading");

// update properties of the heading element
myHeading.style.backgroundColor = "blue";
myHeading.style.textAlign = "center";
myHeading.style.color = "white";

// get the properties of the heading element
console.log(myHeading);

/* 

    document.getElementsByClassName() - returns HTML collection based on the class name

*/

const elementSelectors = document.getElementsByClassName("elementSelectors");

console.log(elementSelectors);

elementSelectors[0].style.backgroundColor = "red";
elementSelectors[0].style.color = "white";

for (let elementSelector of elementSelectors) {
  elementSelector.style.backgroundColor = "yellow";
  elementSelector.style.color = "black";
}

// HTML collection DO NOT have a forEach() - workaround is to typecast it to an Array

Array.from(elementSelectors).forEach((eS) => {
  eS.style.backgroundColor = "gray";
  eS.style.color = "white";
});

/* 

    document.getElementsByTagName()

*/

const h4Elements = document.getElementsByTagName("h4");

console.log(h4Elements);

for (let h4Element of h4Elements) {
  h4Element.style.backgroundColor = "green";
  h4Element.style.color = "white";
}

const liElements = document.getElementsByTagName("li");

console.log(liElements);

for (let liElement of liElements) {
  liElement.style.backgroundColor = "lightgreen";
  liElement.style.color = "black";
}

Array.from(liElements).forEach((liE) => {
  liE.style.backgroundColor = "lightblue";
  liE.style.color = "black";
});

/* 

    document.querySelector()

*/

const elements = document.querySelector(".elementSelectors");

console.log(elements);

const lists = document.querySelector("li");

console.log(lists);

/* 

    document.querySelectorAll() - return nodeLists that are static unlike HTML Collections

*/

const elementsClass = document.querySelectorAll(".elementSelectors");

elementsClass[2].style.backgroundColor = "purple";
elementsClass[0].style.color = "white";

console.log(elementsClass);

const listsClass = document.querySelectorAll("li");

console.log(listsClass);

listsClass[0].style.backgroundColor = "pink";
listsClass[0].style.color = "black";

listsClass.forEach((li) => {
  li.style.color = "black";
});
