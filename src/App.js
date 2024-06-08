// src/App.js

import React, { useState } from 'react';
import DarkModeToggle from './Components/DarkModeToggle';
import Search from './Components/Search';
import WeatherDisplay from './Components/WeatherDisplay';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const addWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="App">
      {/* Background Video Element */}
      <video autoPlay loop muted className="background-video">
        <source src="https://videos.pexels.com/video-files/856463/856463-hd_1280_720_30fps.mp4" type="video/mp4" />
        {/* Add additional source tags for other formats if needed */}
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <h2>Weather Forecast App</h2>
        <DarkModeToggle />
        <Search addWeatherData={addWeatherData} />
        {weatherData && <WeatherDisplay weatherData={[weatherData]} />}
      </div>
    </div>
  );
}

export default App;
