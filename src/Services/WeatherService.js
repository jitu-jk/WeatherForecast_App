
import axios from 'axios';

const API_KEY = '5a3d80b9dfe38133f783f4a4b9b5aafd';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = (location) => {
  return axios.get(BASE_URL, {
    params: {
      q: location,
      appid: API_KEY,
      units: 'metric',
    },
  });
};
