import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  params: {
    q: 'New York',
    appid: `${process.env.REACT_APP_OPEN_WEATHERMAP_API_KEY}`,
    units: 'metric',
  },
  dataType: 'json',
});
