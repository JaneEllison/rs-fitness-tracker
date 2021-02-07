import axios from 'axios';
import apiQueryConstants from '../constants/apiQueryConstants';

const {
  nutritionixEndpoints: {
    SEARCH_NUTRIENTS_FOR_FOOD_ENDPOINT,
  },
} = apiQueryConstants;

const makeQueryToSearchFood = async (query = '') => {
  const options = {
    method: 'post',
    url: SEARCH_NUTRIENTS_FOR_FOOD_ENDPOINT,
    timeout: 0,
    headers: {
      'Content-Type': 'application/json',
      'x-app-id': `${process.env.REACT_APP_NUTRITIONIX_APP_ID}`,
      'x-app-key': `${process.env.REACT_APP_NUTRITIONIX_API_KEY}`,
      'x-remote-user-id': `${process.env.REACT_APP_NUTRITIONIX_REMOTE_USER_ID}`,
    },
    data: {
      query,
      timezone: 'US/Eastern',
    },
  };

  return axios.request(options)
    .then((obj) => obj.data)
    .catch((err) => {
      console.log(err);
      return {};
    });
};

export default makeQueryToSearchFood;
