import axios from 'axios';
import apiQueryConstants from '../constants/apiQueryConstants';

const {
  openWeatherMapEndpoints: {
    FIND_WEATHER_BY_CITY_ID,
  },
} = apiQueryConstants;

const DEFAULT_WEATHER_DATA = {
  temperature: '-3',
  name: 'Minsk',
  countryName: 'Belarus',
  description: 'Mostly cloudy',
  icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6Eqcl15XoN3eM922kfnx7ftuuENq5kTCrg&usqp=CAU',
  temperatureFeelsLike: '-5',
  wind: '11',
  pressure: '1002 Hpa',
  humidity: '88',
};

const makeQueryToFindWeather = async (id) => {
  const options = {
    params: {
      appid: `${process.env.REACT_APP_OPEN_WEATHERMAP_API_KEY}`,
      units: 'metric',
      id,
    },
    dataType: 'json',
  };

  return axios.get(FIND_WEATHER_BY_CITY_ID, options)
    .then((res) => {
      if (res.status === 200 && res.statusText === 'OK') {
        return {
          temperature: res.data.main.temp,
          name: res.data.name,
          countryName: res.data.sys.country,
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
          temperatureFeelsLike: res.data.main.feels_like,
          pressure: res.data.main.pressure,
          wind: res.data.wind.speed,
          humidity: res.data.main.humidity,
        };
      }

      throw new Error('Incorrect response');
    })
    .catch(() => DEFAULT_WEATHER_DATA);
};

export default makeQueryToFindWeather;
