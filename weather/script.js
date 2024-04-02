
function getWeather() {
  const city = document.getElementById('city').value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1858fe1979883aa46376e62061afa7d5`)
      .then(response => response.json())
      .then(data => {
          const weatherData = document.getElementById('weather-data');
          weatherData.innerHTML = `
              <h2>${data.name}, ${data.sys.country}</h2>
              <p>Weather: ${data.weather[0].main}</p>
              <p>Description: ${data.weather[0].description}</p>
              <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
              <p>Humidity: ${data.main.humidity}%</p>
              <p>Wind Speed: ${data.wind.speed} m/s</p>
          `;
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
      });
}

