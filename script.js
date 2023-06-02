const forecastContainer = document.getElementById('forecast-container');

const apiKey = '26f25b18c1804a2bbbc11824232605';

// Weather icon mappings
const weatherIcons = {
  'clear': 'clear.png',
  'partly cloudy': 'partly-cloudy.png',
  'cloudy': 'cloudy.png',
  'rain': 'rain.png',
  'thunderstorm': 'thunderstorm.png',
  'snow': 'snow.png',
  'mist': 'mist.png',
  // Add more mappings for other weather conditions if desired
};

fetch(`http://api.weatherapi.com/v1/forecast.json?key=26f25b18c1804a2bbbc11824232605&q=Salt Lake City&days=3&aqi=yes&alerts=yes`)
  .then(response => response.json())
  .then(data => {
    // Process the forecast data and update the HTML
    const forecastDays = data.forecast.forecastday;

    forecastDays.forEach(day => {
      const date = day.date;
      const maxTemperature = day.day.maxtemp_f;
      const minTemperature = day.day.mintemp_f;
      const weatherDescription = day.day.condition.text;
      const weatherIcon = weatherIcons[day.day.condition.text.toLowerCase()];

      const forecastCard = document.createElement('div');
      forecastCard.classList.add('forecast-card');
      forecastCard.innerHTML = `
        <h2>${date}</h2>
        <img class="forecast-icon" src="${weatherIcon}" alt="${weatherDescription}">
        <p>Max Temperature: ${maxTemperature}°F</p>
        <p>Min Temperature: ${minTemperature}°F</p>
        <p>${weatherDescription}</p>
      `;

      forecastContainer.appendChild(forecastCard);
    });
  })
  .catch(error => {
    // Handle any errors
    console.log('Error fetching forecast data:', error);
  });