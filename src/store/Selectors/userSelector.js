import { createSelector } from 'reselect';
import getAgeFromDateString from './../../utils/getAgeFromDateString';
import getUserDataset from './../../utils/getUserDataset';

const getUser = (state) => state.userReducer.user;
const getUserSummary = (state) => getUser(state).summary;
const getUserHistory= (state) => getUser(state).history;

export const userSummarySelector = createSelector(getUserSummary, (summary) => {
  return {
    ...summary, 
    age: getAgeFromDateString(summary.birthday),
  };
});

export const userDatasetSelector = createSelector(
  getUserSummary,
  getUserHistory,
  (summary, history) => getUserDataset(summary, history),
);