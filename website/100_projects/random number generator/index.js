// Get references to the button and labels
const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");

// Define the minimum and maximum values for the random number
const min = 1;
const max = 6;

// Declare a variable to store the random number
let randonNum;

// Add an event listener to the button
myButton.addEventListener("click", () => {
  // Generate and display random numbers in the labels
  myLabel1.textContent = generateRandomNumber();
  myLabel2.textContent = generateRandomNumber();
  myLabel3.textContent = generateRandomNumber();
});

// Function to generate a random number between min and max
function generateRandomNumber() {
  // Calculate the random number using Math.random() and Math.floor()
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
