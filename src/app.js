function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);

}

    let apiKey = "0581d02730e98a58a80fa1d4c2e31dcc";
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=Belfast&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(displayTemperature);