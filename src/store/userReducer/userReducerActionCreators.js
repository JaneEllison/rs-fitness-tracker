import { UPDATE_USER_SUMMARY } from './userReducerActionTypes';

export const updateUserSummaryAC = (userWeight, userHeight, userBirthday, userSex) => ({
  type: UPDATE_USER_SUMMARY,
  payload: {
    weight: userWeight,
    height: userHeight,
    birthday: userBirthday.format('M/D/YYYY'),
    sex: userSex.target?.value || userSex,
  },
});