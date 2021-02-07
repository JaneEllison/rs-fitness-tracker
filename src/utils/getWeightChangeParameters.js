import { ACTIVITY_FACTORS, CALORIES_IN_LB } from '../constants/weightChangeConstants';

const getHarrisBenedictBMR = ({
  age, sex, height, weight,
}) => (sex === 'male'
  ? 88.362 + (4.799 * height) + (13.397 * weight) - (5.667 * age)
  : 447.593 + (3.098 * height) + (9.247 * weight) - (4.330 * age));

const getDailyMaintenanceCalories = (summary, activity) => {
  const BMR = getHarrisBenedictBMR(summary);
  return BMR * ACTIVITY_FACTORS[activity];
};

const getWeightChangeParameters = (summary, activity) => {
  const dailyMaintenanceCalories = Math.round(getDailyMaintenanceCalories(summary, activity));
  return ({
    maintain: dailyMaintenanceCalories,
    mildLoss: dailyMaintenanceCalories - Math.round((CALORIES_IN_LB / (2 * 7))),
    normalLoss: dailyMaintenanceCalories - Math.round((CALORIES_IN_LB / 7)),
    extremeLoss: dailyMaintenanceCalories - (Math.round(2 * (CALORIES_IN_LB / 7))),
    mildGain: dailyMaintenanceCalories + Math.round((CALORIES_IN_LB / (2 * 7))),
    normalGain: dailyMaintenanceCalories + Math.round((CALORIES_IN_LB / 7)),
    extremeGain: dailyMaintenanceCalories + Math.round((2 * (CALORIES_IN_LB / 7))),
  });
};

export default getWeightChangeParameters;
