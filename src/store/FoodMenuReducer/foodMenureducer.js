import {
  FETCH_FOOD_TO_MENU,
  CALCULATE_TOTAL_NUTRIENTS,
  REMOVE_FOOD_FROM_MENU,
} from './foodMenuReducerActionTypes';
import setNewMenuItemId from '../../utils/setNewMenuItemId';
import calculateTotalNutrients from '../../utils/calculateTotalNutrients';

const initialState = {
  foodMenu: [
    {
      id: 0,
      food_name: 'Apple Pie',
      nf_calories: 296.25,
      nf_total_fat: 13.75,
      nf_total_carbohydrate: 42.5,
      nf_protein: 2.38,
      weight: 100,
    },
    {
      id: 1,
      food_name: 'Cherry',
      nf_calories: 5.17,
      nf_total_fat: 0.02,
      nf_total_carbohydrate: 1.31,
      nf_protein: 0.09,
      weight: 100,
    },
  ],
  totalNutrients: {
    nf_calories: 0,
    nf_total_fat: 0,
    nf_total_carbohydrate: 0,
    nf_protein: 0,
    weight: 0,
  }
};

const foodMenuReducer = (state=initialState, action) => {
  const { foodMenu } = state;
  const { payload, type } = action;

  switch(type){
    case FETCH_FOOD_TO_MENU:
      return {
        ...state,
        foodMenu: [
          ...foodMenu,
          {
            ...setNewMenuItemId(foodMenu, payload)
          },
        ]
      };

    case CALCULATE_TOTAL_NUTRIENTS:
      return {
        ...state,
        totalNutrients: {
          ...calculateTotalNutrients(foodMenu)
        },
      };

    case REMOVE_FOOD_FROM_MENU:
      return {
        ...state,
        foodMenu: [...foodMenu.filter((item) => item.id !== payload)],
      };
    default:
      return {...state};
  }
};

export default foodMenuReducer;
