const calculateTotalCaloriesForDay = (foodsArray) => {
  if (!foodsArray) return 0;
  return foodsArray.reduce((acc, food) => {
    let total = acc;
    total += food.nf_calories;
    return total;
  }, 0);
};

export default calculateTotalCaloriesForDay;
