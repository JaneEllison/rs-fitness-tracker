import { createSelector } from 'reselect';
import getAgeFromDateString from './../../utils/getAgeFromDateString';
import getUserDataset from './../../utils/getUserDataset';
import {
  getMaxSafeWeight,
  getMinSafeWeight
} from './../../utils/getSafeWeight';

const getUser = (state) => state.userReducer.user;
const getUserSummary = (state) => getUser(state).summary;
const getUserHistory= (state) => getUser(state).history;

export const getUserGoal = (state) => getUser(state).goal;

export const userSummarySelector = createSelector(getUserSummary, (summary) => {
  return {
    ...summary, 
    age: getAgeFromDateString(summary.birthday),
    maxSafeWeight: getMaxSafeWeight(summary.height),
    minSafeWeight: getMinSafeWeight(summary.height),
  };
});

export const userGoalSelector = createSelector(getUserGoal, (goal) => {
  return {
    goalEndDate: goal?.endDate || false,
    goalWeight: goal?.endWeight || false,
    goalCalories: goal?.calories || false,
  }
});

export const userDatasetSelector = createSelector(
  getUserGoal,
  getUserHistory,
  (goal, history) => getUserDataset(goal, history),
);