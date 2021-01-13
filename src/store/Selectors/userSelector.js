import { createSelector } from 'reselect';
import getAgeFromDateString from './../../helpers/getAgeFromDateString';
import getDateStringsRange from './../../helpers/getDateStringsRange';
import getLinearRange from './../../helpers/getLinearRange';

const getUser = (state) => state.userReducer.user;
const getUserHistory = (state) => getUser(state).history;

const getUserSummary = (state) => getUser(state).summary;
const getUserGoal = (state) => getUser(state).goal;
const getUserHistoryDates = (state) => getUserHistory(state).dates;
const getUserHistoryWeight = (state) => getUserHistory(state).weight;
const getUserHistoryCalories = (state) => getUserHistory(state).calories;
const getUserHistoryWorkoutTime = (state) => getUserHistory(state).workoutTime;

export const userSummarySelector = createSelector(getUserSummary, (summary) => {
  return {
    ...summary, 
    age: getAgeFromDateString(summary.birthday),
  };
});
export const userGoalSelector = createSelector(getUserGoal, (goal) => {
  if (!goal) {
    return {
      startDate: false,
      endDate: false,
      startWeight: false,
      endWeight: false,
      dailyCalories: false,

      plan: {
        dates: false,
        weight: false,
      }
    };
  } else {
    const {
      startDate,
      endDate,
      startWeight,
      endWeight,
    } = goal;
    const dates = getDateStringsRange(startDate, endDate);
    const weight = getLinearRange(startWeight, endWeight, dates.length);

    return {
      ...goal,
      plan: {
        dates,
        weight,
      },
    }
  }
});
export const userHistoryDatesSelector = createSelector(getUserHistoryDates, (arr) => arr);
export const userHistoryWeightSelector = createSelector(getUserHistoryWeight, (arr) => arr);
export const userHistoryCaloriesSelector = createSelector(getUserHistoryCalories, (arr) => arr);
export const userHistoryWorkoutTimeSelector = createSelector(getUserHistoryWorkoutTime, (arr) => arr);