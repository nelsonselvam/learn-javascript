/* 
    CLASSLISTS

      - Element property in JS used to interact with an element's list of classes (CSS Classes)
      - Allows you to make reusable clasess for many elements across your webpage

      Methods available:
        - add()
        - remove()
        - toggle()
        - replace()
        - contains()


*/

const myButton = document.getElementById("myButton");

myButton.classList.add("enabled"); // right click and Inspect element to find the class added
myButton.classList.add("disabled");
// myButton.classList.remove("enabled");

//myButton.classList.add("hover");

// myButton.addEventListener("mouseover", event => {
//   event.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", event => {
//   event.classList.toggle("hover");
// });

myButton.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "😊";
  } else {
    event.target.classList.replace("disabled", "enabled");
  }
});
