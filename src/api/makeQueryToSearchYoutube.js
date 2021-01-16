import axios from 'axios';
const KEY = 'AIzaSyCpvZGA8FIoSerH9bs_Apvhogb9FpdMgYE';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults:5,
    key:KEY
  },
  headers:{}
});
