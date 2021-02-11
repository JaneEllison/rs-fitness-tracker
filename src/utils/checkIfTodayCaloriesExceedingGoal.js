const checkIfTodayCaloriesExceedingGoal = (todayCalories, goalCalories) => todayCalories
  > goalCalories * 1.1;
export const checkIfTodayCaloriesReachingGoal = (todayCalories, goalCalories) => todayCalories
  > goalCalories;

export default checkIfTodayCaloriesExceedingGoal;
