const getIconLink = (size) => (icon) => `https://openweathermap.org/img/wn/${icon}@${size}x.png`;

export default {
  IMG_ALT: 'weather-icon',
  IMG_SIZE_SUMMARY: 2,
  IMG_SIZE_MODAL: 4,
  GET_IMG_SRC: getIconLink,

  TEMP_UNIT: '°C',
  WIND_UNIT: 'km/h',
  PRESSURE_UNIT: 'mm hh',
  HUMIDITY_UNIT: '%',

  FEELS_LIKE_TEXT: 'Feels like:',
  WIND_TEXT: 'Wind:',
  PRESSURE_TEXT: 'Pressure:',
  HUMIDITY_TEXT: 'Humidity:',
};
