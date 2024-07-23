const input = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convertTemperature() {
  temp = input.value;
  if (toFahrenheit.checked) {
    temp=   (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(2) + "" + "°F";
  } else if (toCelcius.checked) {
    temp = (temp - 32) * 5 / 9;
    result.textContent = temp.toFixed(2) + "" + "°C";
  } else {
    result.textContent = "Select a unit";
  }
}
