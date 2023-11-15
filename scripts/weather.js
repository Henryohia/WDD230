const weatherUrl =
  "http://api.openweathermap.org/data/2.5/weather?q=Lagos&units=imperial&appid=717322181629e29430787aee4177448c";
async function apiFetch() {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch();

function displayResults(weatherData) {
  const currentTemperature = weatherData.main.temp.toFixed(0);
  const windSpeed = weatherData.wind.speed.toFixed(0);
  const currentCondition = weatherData.weather[0].description;
  const weatherIcon = document.getElementById("weather-icon");
  const iconSrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].description;

  document.getElementById("current-temp").innerHTML = currentTemperature;
  document.getElementById("wind-speed").innerHTML = windSpeed;
  document.getElementById("condition").innerHTML = currentCondition;
  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);
  windChill = (
    35.74 +
    0.6215 * currentTemperature -
    35.75 * windSpeed ** 0.16 +
    0.4275 * currentTemperature * windSpeed ** 0.16
  ).toFixed(0);

  if (currentTemperature > 50 || windSpeed <= 3) {
    document.getElementById("result").innerHTML = "N/A";
  } else {
    document.getElementById("result").innerHTML = windChill;
  }
}
