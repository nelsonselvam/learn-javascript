/* 
    NODELISTS

    - Static Collection of HTML elements
    - Can be created by querySelectorAll() (by id, class or element type)
    - Similar to any array but no map, filter or reduce
    - Won't update automatically to relfect the changes.
*/

//let buttons = document.querySelectorAll("buttons");  // by element type
let buttons = document.querySelectorAll(".myButtons"); // by class

console.log(buttons);

// add HTML/CSS properties

buttons.forEach((button) => {
  button.style.backgroundColor = "blue";
  button.style.color = "white";
  button.textContent += "😊";
});

// add event listener for click event

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    /// to remind: event is provided by the browser
    event.target.style.backgroundColor = "tomato";
  });
});

// add event listener for mouseover + mouse out

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    /// to remind: event is provided by the browser
    event.target.style.backgroundColor = "green";
  });
  button.addEventListener("mouseout", (event) => {
    /// to remind: event is provided by the browser
    event.target.style.backgroundColor = "gray";
  });
});

// add an element

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

// below will still list 4 buttons since nodelists are static
console.log(buttons);

buttons = document.querySelectorAll(".myButtons");

// below will still list 4 buttons since nodelists are static
console.log(buttons);

// removing an element

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    buttons = document.querySelectorAll(".myButtons");
    console.log(buttons);
  });
});
