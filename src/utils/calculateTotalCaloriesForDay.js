const calculateTotalCaloriesForDay = (foodsArray) => {
  return foodsArray.reduce((acc, food) => {
    acc += food.nf_calories;
    return acc;
  }, 0)
};

export default calculateTotalCaloriesForDay;
