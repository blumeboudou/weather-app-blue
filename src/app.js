function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  let feelsElement = document.querySelector("#feels-like");
  feelsElement.innerHTML = Math.round(response.data.temperature.feels_like);

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Sydney&key=f147o722t6eb3482f65aeed3faa9908e&units=metric";

axios.get(apiUrl).then(displayTemperature);
