function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${mintues}`;
}
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}
function getForecast(coordinates) {
  let apiKey = "470b2457f49a129b497496a403990894";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat={coordinates.lat}&lon={coordinates.lon}&appid={apiKey}`;
}
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  celsiusTemperature = reponse.data.main.temperatureElement;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = reponse.data.name;
  descriptionElement = reponse.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

  getForecast(response.data.coord);
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#cityInput");
  console.log(searchInput);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#cityInput");
  let searchCity = `${cityInput.value}`;
  let apiKey = "470b2457f49a129b497496a403990894";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(retrieveWeatherData);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", searchCity);
