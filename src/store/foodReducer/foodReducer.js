import FETCH_FOOD_DATA from './foodReducerActionTypes';
import makeQueryToSearchFood from '../../api/makeQueryToSearchFood';

const initialState = {
  food: '',
};

const foodReducer = (state=initialState, action) => {
  switch(action.type){
    case FETCH_FOOD_DATA:
      return {...state, food: action.payload};
    default:
      return {...state};
  }
};

export const fetchFoodDataAC = (data) => {
  return {
    type: FETCH_FOOD_DATA,
    payload: data,
  }
};

export const getSearchDataFromAPI =  (query) => {
  return async (dispatch) => {
    const response = await makeQueryToSearchFood(query);
    response && dispatch(fetchFoodDataAC(response));
  }
};

export default foodReducer;
