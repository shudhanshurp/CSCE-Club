function getWeather() {
    const apiKey = "46cef9d663f9b62de1c276cc44e8d41f";

    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
    )}&units=imperial&appid=${apiKey}`;

    fetch(url)
        .then((resp) => {
            console.log(resp);
            return resp.json();
        })
        .then((data) => displayWeather(data))
        .catch((error) => console.error(error));
}
function displayWeather(data) {
    console.log(data);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, feels_like, temp_min, temp_max, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".container").classList.remove("loading");

    document.getElementById("location").innerText = `Weather in ${name}`;
    document.getElementById("temperature").innerText = `${temp}°F`;
    document.getElementById("feels").innerText = `Feels like: ${feels_like}°F`;
    document.getElementById(
        "icon"
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.getElementById("description").innerText = description;
    document.getElementById("high").innerText = `High: ${temp_max}°F`;
    document.getElementById("low").innerText = `Low: ${temp_min}°F`;
    document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;
    document.getElementById("wind").innerText = `Wind: ${speed}mph`;

    let miliseconds = 300;
    setTimeout(() => {
        let weatherInfo = document.querySelector(".weatherInfo");
        weatherInfo.style.display = "auto";
        weatherInfo.style.transition = "opacity 2s";
        weatherInfo.style.opacity = "1";
    }, miliseconds);
}
