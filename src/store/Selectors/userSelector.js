import { createSelector } from 'reselect';
import getAgeFromDateString from './../../utils/getAgeFromDateString';
import getUserDataset from './../../utils/getUserDataset';

const getUser = (state) => state.userReducer.user;
const getUserSummary = (state) => getUser(state).summary;
const getUserGoal = (state) => getUser(state).goal;
const getUserHistory= (state) => getUser(state).history;

export const userSummarySelector = createSelector(getUserSummary, (summary) => {
  return {
    ...summary, 
    age: getAgeFromDateString(summary.birthday),
  };
});

export const userGoalSelector = createSelector(getUserGoal, (goal) => {
  return {
    goalWeight: goal?.endWeight || false,
    goalCalories: goal?.calories || false,
  }
});

export const userDatasetSelector = createSelector(
  getUserGoal,
  getUserHistory,
  (goal, history) => getUserDataset(goal, history),
);