import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.sypexgeo.net/',
  params: {
    ip: '',
  },
  dataType: 'json',
});
