import axios from 'axios';
import apiQueryConstants from '../constants/apiQueryConstants';

const {
  youtubeApiEndpoints: {
    SEARCH_YOUTUBE_VIDEOS,
  },
} = apiQueryConstants;

export default axios.create({
  baseURL: SEARCH_YOUTUBE_VIDEOS,
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
  headers: {},
});
