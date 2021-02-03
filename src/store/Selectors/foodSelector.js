/* eslint-disable camelcase */
const foodSelector = (state) => {
  const {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
  } = { ...state.foodReducer.food };
  return {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
  };
};
export const foodPhotoSelector = (state) => {
  const {
    photo,
  } = { ...state.foodReducer.food };
  return photo;
};

export default foodSelector;
