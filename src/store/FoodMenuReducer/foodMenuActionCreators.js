import {
  CALCULATE_TOTAL_NUTRIENTS,
} from './foodMenuReducerActionTypes';

export const calculateTotalNutrientsAC = (foodMenu) => ({
  type: CALCULATE_TOTAL_NUTRIENTS,
  payload: foodMenu,
});

