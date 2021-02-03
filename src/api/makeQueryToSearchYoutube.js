import axios from 'axios';

const KEY = 'AIzaSyCotiYDlzwZ8I_ONP1M2DhD4vcHkScFPeU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
  headers: {},
});
