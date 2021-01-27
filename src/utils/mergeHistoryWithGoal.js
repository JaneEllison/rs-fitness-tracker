import getDateStringsRange from './getDateStringsRange';
import getLinearRange from './getLinearRange';

function mergeHistoryWithGoal(history, goal) {
  const {
    startDate: goalStartDate,
    endDate: goalEndDate,
    startWeight: goalStartWeight,
    endWeight: goalEndWeight,
    calories: goalCalories,
  } = goal;
  const goalDateStrings = getDateStringsRange(goalStartDate, goalEndDate);
  const goalWeights = getLinearRange(goalStartWeight, goalEndWeight, goalDateStrings.length);
  
  const result = [];
  const l = goalDateStrings.length;
  let i = null;

  history.forEach((obj) => {
    if (obj.date === goalDateStrings[+i]) {
      result.push({
        ...obj,
        goalWeight: goalWeights[+i],
        goalCalories,
      });

      i += 1;
    } else {
      result.push({
        ...obj,
        goalWeight: null,
        goalCalories: null,
      });
    }
  });

  if (i === null) {
    const lastHistoryDateString = result[result.length - 1].date;
    const gapDateStrings = getDateStringsRange(lastHistoryDateString, goalStartDate).slice(1, -1);
    
    gapDateStrings.forEach((str) => {
      result.push({
        date: str,
        weight: null,
        goalWeight: null,
        calories: null,
        goalCalories: null,
        workoutTime: null,
      });
    });

    i = 0;
  }

  while (i < l) {
    result.push({
      date: goalDateStrings[i],
      goalWeight: goalWeights[i],
      goalCalories,
      weight: null,
      calories: null,
      workoutTime: null,
    });
    
    i += 1;
  }

  return result;
}

export default mergeHistoryWithGoal;