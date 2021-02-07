import axios from 'axios';
import apiQueryConstants from '../constants/apiQueryConstants';

const {
  sypexgeoEndpoints: {
    FIND_CITY_ID_BY_IP,
    DEFAULT_CITY_ID,
  },
} = apiQueryConstants;

const makeQueryToFindCityId = async (ip = '') => {
  const options = {
    params: {
      ip,
    },
    dataType: 'json',
  };

  return axios.get(FIND_CITY_ID_BY_IP, options)
    .then((res) => res.data.city.id)
    .catch(() => DEFAULT_CITY_ID);
};

export default makeQueryToFindCityId;
