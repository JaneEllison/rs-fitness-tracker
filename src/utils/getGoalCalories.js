import getWeightChangeParameters from './getWeightChangeParameters';
import { MINIMUM_CALORIES } from '../constants/weightChangeConstants';

const getGoalCalories = ({
  weightPlan,
  intensityLevel,
  weight,
  height,
  gender,
  age,
  activityLevel,
}) => {
  const key = weightPlan === 'maintain' ? weightPlan : `${intensityLevel}${weightPlan}`;
  return getWeightChangeParameters({
    weight,
    height,
    gender,
    age,
  }, activityLevel)[key];
};

const isLessThanSafe = (cal, sex) => cal < MINIMUM_CALORIES[sex];

export {
  getGoalCalories,
  isLessThanSafe,
};
