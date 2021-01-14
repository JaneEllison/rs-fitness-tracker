import sortArrayByItemData from '../../utils/sortArrayByItemData';
import filterMenuItemsForDate from '../../utils/filterMenuItemsForDate';

export const foodMenuSelector = (state) => sortArrayByItemData(
  filterMenuItemsForDate(new Date(Date.now()),[...state.foodMenuReducer.foodMenu])
);
export const totalNutrientsSelector = (state) => {
  return {...state.foodMenuReducer.totalNutrients}
};

