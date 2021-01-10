import {
  CALCULATE_TOTAL_NUTRIENTS,
  FETCH_FOOD_TO_MENU,
  REMOVE_FOOD_FROM_MENU
} from './foodMenuReducerActionTypes';


export const fetchFoodToMenuAC = (data) => ({
  type: FETCH_FOOD_TO_MENU,
  payload: data,
});

export const calculateTotalNutrientsAC = () => ({
  type: CALCULATE_TOTAL_NUTRIENTS,
});

export const removeFoodFromMenuAC = (foodId) => ({
  type: REMOVE_FOOD_FROM_MENU,
  payload: foodId,
});

