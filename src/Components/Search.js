
import React, { useState } from 'react';
import { fetchWeather } from '../Services/WeatherService';
import './Search.css';

function Search({ addWeatherData }) {
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetchWeather(location);
      addWeatherData(response.data);
      setLocation('');
      setError('');
    } catch (error) {
      setError('Error fetching weather data');
    }
  };

  return (
    <div className="search">
      <input 
        type="text" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="Enter city or zip code" 
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Search;
