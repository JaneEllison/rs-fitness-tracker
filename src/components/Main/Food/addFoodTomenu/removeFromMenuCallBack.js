import { removeFoodFromMenuAC } from '../../../../store/FoodMenuReducer/foodMenureducer';

const removeFromMenuCallBack = (foodId) => {
  removeFoodFromMenuAC(foodId);
};

export default removeFromMenuCallBack;
