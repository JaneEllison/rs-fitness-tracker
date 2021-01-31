import axios from 'axios';
const KEY = 'f7d771976eb460388c4ee30c72eb5157';

export default axios.create({
  baseURL:'http://api.weatherstack.com/current',
  params:{
    access_key: KEY,
    query: 'New York',
  },
  dataType: 'json',
});

