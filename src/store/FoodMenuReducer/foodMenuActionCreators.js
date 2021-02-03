import CALCULATE_TOTAL_NUTRIENTS from './foodMenuReducerActionTypes';

const calculateTotalNutrientsAC = (foodMenu) => ({
  type: CALCULATE_TOTAL_NUTRIENTS,
  payload: foodMenu,
});

export default calculateTotalNutrientsAC;
