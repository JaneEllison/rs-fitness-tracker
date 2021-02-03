import FETCH_FOOD_DATA from './foodReducerActionTypes';
import makeQueryToSearchFood from '../../api/makeQueryToSearchFood';

const initialState = {
  food: '',
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOOD_DATA:
      return { ...state, food: action.payload.foods[0] };
    default:
      return { ...state };
  }
};

export const fetchFoodDataAC = (data) => ({
  type: FETCH_FOOD_DATA,
  payload: data,
});

export const getSearchDataFromAPI = (query) => async (dispatch) => {
  const response = await makeQueryToSearchFood(query);

  if (response) {
    dispatch(fetchFoodDataAC(response));
  }
};

export default foodReducer;
