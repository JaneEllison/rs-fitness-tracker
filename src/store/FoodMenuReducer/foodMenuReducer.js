import CALCULATE_TOTAL_NUTRIENTS from './foodMenuReducerActionTypes';
import calculateTotalNutrients from '../../utils/calculateTotalNutrients';

const initialState = {
  totalNutrients: {
    weight: 0,
    nf_calories: 0,
    nf_total_fat: 0,
    nf_total_carbohydrate: 0,
    nf_protein: 0,
  },
};

const foodMenuReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case CALCULATE_TOTAL_NUTRIENTS:
      return {
        ...state,
        totalNutrients: {
          ...calculateTotalNutrients(action.payload),
        },
      };
    default:
      return state;
  }
};

export default foodMenuReducer;
