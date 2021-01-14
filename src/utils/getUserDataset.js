import getDateStringsRange from './getDateStringsRange';
import getLinearRange from './getLinearRange';

function getUserDataset(goal, history) {
  if (!goal) {
    return history;
  } else {
    const {
      startDate,
      endDate,
      startWeight,
      endWeight,
      calories: goalCalories
    } = goal;

    const goalDateStrings = getDateStringsRange(startDate, endDate);
    const goalWeights = getLinearRange(startWeight, endWeight, goalDateStrings.length);    
    const goalWeightTimeline = goalDateStrings.reduce((acc, date, index) => {
      acc[date] = goalWeights[index];
      return acc;
    }, {});
    const goalWeightTimelineKeys = Object.keys(goalWeightTimeline);
    let lastGoalDateIndex;

    const result = history.map((obj) => {
      if (goalWeightTimeline[obj.date]) {
        lastGoalDateIndex = goalWeightTimelineKeys.indexOf(obj.date);
        
        return {
          ...obj,
          goalWeight: goalWeightTimeline[obj.date],
          goalCalories,
        }
      } else {
        return {
          ...obj,
          goalWeight: null,
          goalCalories: null,
        }
      }
    });

    while (lastGoalDateIndex < goalWeightTimelineKeys.length - 1) {
      lastGoalDateIndex += 1;

      const d = goalWeightTimelineKeys[lastGoalDateIndex];
      const w = goalWeightTimeline[d];

      result.push({
        date: d,
        weight: null,
        calories: null,
        workoutTime: null,
        goalWeight: w,
        goalCalories,
      });
    }

    return result;
  }
}

export default getUserDataset;