import { fetchFoodToMenuAC } from '../../../../store/FoodMenuReducer/foodMenureducer';
import calculateNutrientsByWeight from '../../../../utils/calculateNutrientsByWeight';

const addToMenuCallback = (dispatch, foodData, weight) => {
  const {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
  } = foodData;

  dispatch(fetchFoodToMenuAC({
    food_name,
    ...calculateNutrientsByWeight({
      nf_calories,
      nf_total_fat,
      nf_total_carbohydrate,
      nf_protein}, weight),
    weight,
  }))
};

export default addToMenuCallback;
