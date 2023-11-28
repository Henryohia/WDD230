// select HTML elements in the document
const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "http://api.openweathermap.org/data/2.5/weather?q&lat=49.75&lon=6.64&units=imperial&appid=717322181629e29430787aee4177448c";
//   https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //   console.log(data); // this is for testing the call
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
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;
  const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}
