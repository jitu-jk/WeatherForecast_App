import React from 'react';
import './Style.css'; 
function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;
  const date = new Date();
  const temperature = main.temp;

  
  let boxShadowColor = 'green';

  if (temperature > 35) {
    boxShadowColor = 'red'; 
  } else if (temperature < 15) {
    boxShadowColor = 'green'; 
  }

  return (
    <div className="weather-card" style={{ boxShadow: `0 20px 40px ${boxShadowColor}` }}>
      <h1 className="location">{name}</h1>
      <p className="date">{date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
      <p className="Temperature">{main.temp} °C</p>
      <p>Humidity: {main.humidity} %</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Description: {weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
