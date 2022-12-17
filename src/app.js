function showDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let showday = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let min = now.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  return `${showday} ${hours}:${min}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let speedElement = document.querySelector("#speed");
  temperatureElement.innerHTML = Math.round(
    response.data.daily[0].temperature.day
  );
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.daily[0].condition.description;
  humidityElement.innerHTML = response.data.daily[0].temperature.humidity;
  speedElement.innerHTML = Math.round(response.data.daily[0].wind.speed);
  document.querySelector("#time").innerHTML = showDate(response.data.dt * 1000);

  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[0].condition.icon}.png`
    );

  document
    .querySelector("#icon")
    .setAttribute("alt", response.data.daily[0].condition.description);
}

let apiKey = "52o39a0be8e7e44c8561e303aatfcbbf";
let city = "Buenos Aires";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
