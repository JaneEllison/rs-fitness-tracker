import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.sypexgeo.net/',
  params: {
    ip: '',
  },
  dataType: 'json',
});
