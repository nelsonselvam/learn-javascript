/* 
    DOM MANIPULATION - SHOW/HIDE HTML ELEMENTS

    - Select the button and image elements using their IDs.
    - Add an event listener to the button for the "click" event.
    - Inside the event listener:
        - Check if the image is currently hidden (display: none).
        - If hidden, show the image (display: block) and change the button text to "Hide".
        - If visible, hide the image (display: none) and change the button text to "Show".
*/

const myBtn = document.getElementById("myBtn"); // Select the button element by its ID

const myImg = document.getElementById("myImg"); // Select the image element by its ID

// Add an event listener to the button for the "click" event
myBtn.addEventListener("click", () => {
  // Check if the image is currently hidden (display: none)
  if (myImg.style.display === "none") {
    // If hidden, show the image (display: block) and change the button text to "Hide"
    myImg.style.display = "block";
    myBtn.textContent = "Hide";
  } else {
    // If visible, hide the image (display: none) and change the button text to "Show"
    myImg.style.display = "none";
    myBtn.textContent = "Show";
  }
});
