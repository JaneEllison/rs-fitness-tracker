const calculateTotalNutrients = (foodsArray) => foodsArray.reduce((acc, food) => {
  Object.keys(acc).forEach((item) => {
    const value = acc[item] + parseFloat(food[item]);
    acc[item] = parseFloat((value).toFixed(2));
  });
  return acc;
}, {
  nf_calories: 0,
  nf_total_fat: 0,
  nf_total_carbohydrate: 0,
  nf_protein: 0,
  weight: 0,
});

export default calculateTotalNutrients;
