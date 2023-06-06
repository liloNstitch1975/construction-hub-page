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
 //http://127.0.0.1:5500/cardHTMLs/classicjack.html

 //http://127.0.0.1:5500/cardHTMLs/graniteConstruction.html

 //http://127.0.0.1:5500/cardHTMLs/rennison.html

 //http://127.0.0.1:5500/cardHTMLs/rennison.html


 var map = L.map('map').setView([0,0], 1);
 L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=xVi58PRopLxFqgLdOfgh', {
     attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
 }).addTo(map);

 var marker1 = L.marker([39.571, -111.928]).addTo(map);
 var circle1 = L.circle([39.571, -111.928], 
 {color:'red',
 fillColor:'#f03',
 fillOpacity: 0.5,
 radius: 125000
}).addTo(map);

marker1.bindPopup("<b> Hey There! </b><br> I am a marker1.").openPopup();

var marker2 = L.marker([38.251, -85.756]).addTo(map);
var circle2 = L.circle([38.251, -85.756], {color:'red',
 fillColor:'#f03',
 fillOpacity: 0.5,
 radius: 125000
}).addTo(map);

marker2.bindPopup("<b> Hey There! </b><br> I am a marker2.").openPopup();

var marker3 = L.marker([43.133, -84.726]).addTo(map);
var circle3 = L.circle([43.133, -84.726], {color:'red',
 fillColor:'#f03',
 fillOpacity: 0.5,
 radius: 125000
}).addTo(map);

marker3.bindPopup("<b> Hey There! </b><br> I am a marker3.").openPopup();

var marker4 = L.marker([38.993, -94.614]).addTo(map);
var circle4 = L.circle([38.993, -94.614], {color:'red',
 fillColor:'#f03',
 fillOpacity: 0.5,
 radius: 125000
}).addTo(map);

marker4.bindPopup("<b> Hey There! </b><br> I am a marker4.").openPopup();



L.control.scale({
 metric: true,
 imperial: false,
 position: 'topright'
}).addTo(map);

L.Control.Watermark=L.Control.extend({
 onAdd:function(map){
     var img = L.DomUtil.create('img');
     img.src = 'logo.png';
     img.style.width = '200px';
     return img;
 },
 onRemove:function(map){},
});

L.control.watermark = function(opts){
 return new L.Control.Watermark(opts);
}

L.control.watermark({position:'bottomleft'}).addTo(map);

 