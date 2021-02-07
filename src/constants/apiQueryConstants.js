const apiQueryConstants = {
  nutritionixEndpoints: {
    SEARCH_NUTRIENTS_FOR_FOOD_ENDPOINT: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
  },
  sypexgeoEndpoints: {
    FIND_CITY_ID_BY_IP: 'https://api.sypexgeo.net/',
    DEFAULT_CITY_ID: 625144,
  },
  openWeatherMapEndpoints: {
    FIND_WEATHER_BY_CITY_ID: 'https://api.openweathermap.org/data/2.5/weather',
    DEFAULT_WEATHER_DATA: {
      temperature: '-3',
      name: 'Minsk',
      countryName: 'Belarus',
      description: 'Mostly cloudy',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6Eqcl15XoN3eM922kfnx7ftuuENq5kTCrg&usqp=CAU',
      temperatureFeelsLike: '-5',
      wind: '11',
      pressure: '1002 Hpa',
      humidity: '88',
    },
  },
  youtubeApiEndpoints: {
    SEARCH_YOUTUBE_VIDEOS: 'https://www.googleapis.com/youtube/v3',
  },
};

export default apiQueryConstants;
