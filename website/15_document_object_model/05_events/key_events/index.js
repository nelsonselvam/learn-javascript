/* KEY EVENT LISTENERS

    eventListener - listen for specific events to create interactive web pages
    events: keydown, keyup, keypress (not compatible with all browsers)
            keydown - when a key is pressed down   
            keyup   - when a key is released
    document.addEventListener(event, callback);

*/

// Select the element with the id "myBox"
const myBox = document.getElementById("myBox");

// Add an event listener for the "keydown" event
document.addEventListener("keydown", (event) => {
  // Log the pressed key to the console
  console.log(`Key down = ${event.key}`);
  // Change the text content of the "myBox" element to a smiley face
  myBox.textContent = "😊";
  // Set the background color of the "myBox" element to light blue
  myBox.style.backgroundColor = "lightblue";
});

// Add an event listener for the "keyup" event
document.addEventListener("keyup", (event) => {
  // Log the released key to the console
  console.log(`Key up = ${event.key}`);
  // Change the text content of the "myBox" element to a frowning face
  myBox.textContent = "😒";
  // Set the background color of the "myBox" element to coral
  myBox.style.backgroundColor = "coral";
});

// Define the amount to move the box on each key press
const moveAmount = 10;

// Initialize the x and y coordinates of the box
let x = 0;
let y = 0;

// Add an event listener for the "keydown" event
document.addEventListener("keydown", (event) => {

    
  // Check if the pressed key is an arrow key
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();
    // Use a switch statement to handle different arrow keys
    switch (event.key) {
      // If the key is "ArrowUp"
      case "ArrowUp":
        // Change the text content of the "myBox" element to a smiley face
        myBox.textContent = "😊";
        // Move the box up by the "moveAmount"
        y -= moveAmount;
        break;
      // If the key is "ArrowDown"
      case "ArrowDown":
        // Move the box down by the "moveAmount"
        y += moveAmount;
        break;
      // If the key is "ArrowLeft"
      case "ArrowLeft":
        // Move the box left by the "moveAmount"
        x -= moveAmount;
        break;
      // If the key is "ArrowRight"
      case "ArrowRight":
        // Change the text content of the "myBox" element to a smiley face
        myBox.textContent = "😊";
        // Move the box right by the "moveAmount"
        x += moveAmount;
        break;
    }
    // Apply the translation to the "myBox" element using CSS transform
    myBox.style.transform = `translate(${x}px, ${y}px)`;
  }
});
