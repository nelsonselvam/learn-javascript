const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const counter = document.getElementById("countLabel");
const buttons = document.querySelector('.buttons')

let count = 0;

decreaseBtn.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

increaseBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});


buttons.onclick = () => {
    if (count > 0)
        counter.style.color = 'green'
    if (count < 0)
        counter.style.color = 'red'
    if (count == 0)
        counter.style.color = 'black'
}