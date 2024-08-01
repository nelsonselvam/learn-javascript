/*  EVENT LISTENER

        listen for specific events to create interactive web pages
        events: click, mouseover, mouseout

        .addEventListener(event,callback);

        ex: addEventListener("click", () => console.log(event));

*/

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("click");

myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.style.color = "white";
  event.target.textContent = "OUCH!! 😨";
  console.log(event); // event provided by the browser & contains info about event that happens
});


myBox.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "yellow";
        event.target.style.color = "black";
        event.target.textContent = "Don't Click Me!!";
      });

myBox.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "grey";
        event.target.style.color = "white";
        event.target.textContent = "HEHE!! 🤣";
});


myButton.addEventListener("click", event =>{
        myBox.style.backgroundColor = "tomato";
        myBox.style.color = "white";
        myBox.textContent = "OUCH!! 😨";
})