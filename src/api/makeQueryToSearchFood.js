import apiQueryConstants from '../constants/apiQueryConstants';
import makeQuery from './makeQuery';

const { foodDataCenterEndpoints: {searchFoodEndpoint},
  foodDataCenterDataTypes: {Foundation}
} = apiQueryConstants;

const makeQueryToSearchFood = async (query = '') => {
  return await makeQuery(`${searchFoodEndpoint}?api_key=${process.env.REACT_APP_FOOD_DATA_CENTER_KEY}&query=${query}&dataType=${Foundation}`);
};

export default makeQueryToSearchFood;
