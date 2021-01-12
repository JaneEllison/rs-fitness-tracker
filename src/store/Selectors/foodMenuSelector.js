import sortArrayByItemData from '../../utils/sortArrayByItemData';

export const foodMenuSelector = (state) => sortArrayByItemData([...state.foodMenuReducer.foodMenu]);
export const totalNutrientsSelector = (state) => {
  return {...state.foodMenuReducer.totalNutrients}
};

