import { FETCH_FOOD_TO_MENU } from './foodMenuReducerActionTypes';

const initialState = {
  foodMenu: [
    {
      food_name: 'Apple Pie',
      nf_calories: '296.25',
      nf_total_fat: '13.75',
      nf_total_carbohydrate: '42.5',
      nf_protein: '2.38',
      weight: '100',
    },
    {
      food_name: 'Cherry',
      nf_calories: '5.17',
      nf_total_fat: '0.02',
      nf_total_carbohydrate: '1.31',
      nf_protein: '0.09',
      weight: '100',
    },
  ],
};

const foodMenuReducer = (state=initialState, action) => {
  switch(action.type){
    case FETCH_FOOD_TO_MENU:
      return {...state, food: action.payload};
    default:
      return {...state};
  }
};

export const fetchFoodToMenuAC = (data) => {
  return {
    type: FETCH_FOOD_TO_MENU,
    payload: data,
  }
};

export default foodMenuReducer;
