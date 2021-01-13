import { removeFoodFromMenuAC } from '../../../../../../store/FoodMenuReducer/foodMenuActionCreators';

const removeFromMenuCallBack = (foodId) => {
  removeFoodFromMenuAC(foodId);
};

export default removeFromMenuCallBack;
