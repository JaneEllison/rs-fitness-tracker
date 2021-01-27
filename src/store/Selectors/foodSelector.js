const foodSelector = (state) => {
  const {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
    photo
  } = {...state.foodReducer.food};
  return {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
    photo
  }
};

export default foodSelector;
