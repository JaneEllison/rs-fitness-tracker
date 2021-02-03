const calculateTotalCaloriesForDay = (foodsArray) => {
  if (!foodsArray) return 0;
  return foodsArray.reduce((acc, food) => {
    const newVal = acc + food.nf_calories;
    return newVal;
  }, 0);
};

export default calculateTotalCaloriesForDay;
