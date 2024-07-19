/* NUMBER GUESSING GAME

    - prompt user to guess a number
    - set guessing range (min and max)
    - prompt user with low and  high attempts to refine user's guess

*/

// Initialize variables
let guess; // Stores the user's guess
let isGuessCorrect = false; // Flag to track if the guess is correct
let min = 1; // Minimum value for the guessing range
let max = 100; // Maximum value for the guessing range
let attempts = 0; // Counter for the number of guesses made

// Generate a random number between min and max
let answer = Math.floor(Math.random() * (max - min + 1) + min);

// Game loop: continues until the user guesses correctly
while (!isGuessCorrect) {
  // Prompt the user for a guess
  guess = window.prompt(`Guess a number between ${min} and ${max}`);

  // Convert the user's input to a number
  guess = Number(guess);

  // Input validation
  if (guess === NaN) {
    // If the input is not a number, alert the user
    window.alert("Please enter a number");
  } else if (guess < min || guess > max) {
    // If the guess is outside the range, alert the user
    window.alert(`Please enter a number between ${min} and ${max}`);
  } else {
    // If the input is valid, increment the attempts counter
    attempts++;

    // Compare the guess to the answer
    if (guess < answer) {
      // If the guess is too low, alert the user
      window.alert("TOO LOW!!");
    } else if (guess > answer) {
      // If the guess is too high, alert the user
      window.alert("TOO HIGH!!");
    } else {
      // If the guess is correct, alert the user with the answer and attempts
      window.alert(
        `CORRECT!!! The answer is ${answer}. It took you ${attempts} attempts.`
      );

      // Exit the loop since the guess is correct
      break;
    }
  }
}
