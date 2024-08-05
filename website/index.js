const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

const apikey = "10a11b22e7e1aa45e765e904474b9e49";

weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeather(city);
      displayWeather(weatherData);
    } catch (error) {
      displayError(error);
    }
  } else {
    //console.log(error);
    displayError("Please enter a city");
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }
  //   console.log(response.json());
  return await response.json();
}

function displayWeather(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  card.appendChild(cityDisplay);
  cityDisplay.classList.add("cityDisplay");

  tempDisplay.textContent = `${(temp - 273.15).toFixed(2)}℃`;
  card.appendChild(tempDisplay);
  tempDisplay.classList.add("tempDisplay");

  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  card.appendChild(humidityDisplay);
  humidityDisplay.classList.add("humidityDisplay");

  descDisplay.textContent = description;
  card.appendChild(descDisplay);
  descDisplay.classList.add("descDisplay");

  weatherEmoji.textContent = getWeatherEmoji(id);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 400:
      return "⛈️";
    case weatherId >= 500 && weatherId < 600:
      return "⛈️";
    case weatherId >= 600 && weatherId < 700:
      return "❄️";
    case weatherId >= 700 && weatherId < 800:
      return "🌫️";
    case weatherId === 800:
      return "☀️";
    case weatherId >= 801 && weatherId < 810:
      return "🌥️";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
