const weatherUrl =
"https://api.openweathermap.org/data/2.5/weather?q&lat=6.62&lon=3.34&units=imperial&appid=717322181629e29430787aee4177448c";
async function apiFetch() {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
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
  const currentCondition = weatherData.weather[0].description;
  const weatherIcon = document.querySelector("#weather-icon");
  const iconSrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].description;

  document.getElementById("current-temp").innerHTML = currentTemperature;
  document.getElementById("condition").innerHTML = currentCondition;
  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);
  
}
