
import React from 'react';
import WeatherCard from './WeatherCard';
import './Style.css';

function WeatherDisplay({ weatherData }) {
  return (
    <div className="weather-display">
      {weatherData.map((data, index) => (
        <WeatherCard key={index} data={data} />
      ))}
    </div>
  );
}

export default WeatherDisplay;
