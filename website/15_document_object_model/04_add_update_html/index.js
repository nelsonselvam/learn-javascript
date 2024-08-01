/* ADD or UPDATE HTML USING JAVASCRIPT


*/

// STEP 1: Create the element
const newH1 = document.createElement("H1");

// STEP 2: Add Attributes/Properties
newH1.textContent = "Hello world!";
newH1.id = "mH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3: APPEND ELEMENT TO DOM
document.body.append(newH1); // add this as the last child

//document.body.prepend(newH1); // add this as the last child

document.getElementById("box1").prepend(newH1);

// insert above box 2 and below box 1
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);

// when ids are not availble for elements, make use of querySelectorAll with the class name

// Removing a HTML element
document.body.removeChild(newH1);

// select parent of the element
// use the removeChild method

// example 2

const newLiItem = document.createElement("li");

newLiItem.textContent = "Coconut";
newLiItem.id = "coconut";
newLiItem.style.color = "brown";

// document.body.append(newLiItem);  // appends outside the list box

document.getElementById("fruits").append(newLiItem); // appends within the list box at the last

const orange = document.getElementById("orange");
const banana = document.getElementById("banana");

document.getElementById("fruits").insertBefore(newLiItem, orange);

const liItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newLiItem, banana);

// document.getElementById("fruits").removeChild(liItems[0]);
