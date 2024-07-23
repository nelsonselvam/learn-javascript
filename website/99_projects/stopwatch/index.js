// STOP WATCH PROGRAM

const display = document.getElementById("display"); // Get the display element
let timer = null; // Variable to store the interval timer
let startTime = 0; // Variable to store the start time
let elapsedTime = 0; // Variable to store the elapsed time
let isRunning = false; // Flag to indicate if the stopwatch is running

// Function to start the stopwatch
function start() {
  if (isRunning) {
    // If the stopwatch is already running, update the start time
    startTime = Date.now() - elapsedTime;
  } else {
    // If the stopwatch is not running, set the start time
    startTime = Date.now();
  }
  // Start the interval timer to update the display every 10 milliseconds
  timer = setInterval(update, 10);
  // Set the isRunning flag to true
  isRunning = true;
}

// Function to stop the stopwatch
function stop() {
  // Clear the interval timer
  clearInterval(timer);
  // Set the isRunning flag to false
  isRunning = false;
}

// Function to reset the stopwatch
function reset() {
  // Clear the interval timer
  clearInterval(timer);
  // Reset the elapsed time to 0
  elapsedTime = 0;
  // Reset the display to "00:00:00:00"
  display.textContent = "00:00:00:00";
  // Set the isRunning flag to false
  isRunning = false;
}

// Function to update the display with the elapsed time
function update() {
  // Get the current time
  const currentTime = Date.now();
  // Calculate the elapsed time
  elapsedTime = currentTime - startTime;
  // Update the display with the formatted elapsed time
  display.textContent = formatTime(elapsedTime);
}

// Function to format the elapsed time into HH:MM:SS:MS format
function formatTime(time) {
  // Calculate the milliseconds, seconds, minutes, and hours
  const milliseconds = Math.floor((time % 1000) / 10);
  const seconds = Math.floor(time / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  // Return the formatted time string
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds
    .toString()
    .padStart(2, "0")}`;
}
