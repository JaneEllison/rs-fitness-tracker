import { 
  UPDATE_USER_SUMMARY,
  UPDATE_USER_GOAL
} from './userReducerActionTypes';

export const updateUserSummaryAC = (userWeight, userHeight, userBirthday, userSex) => ({
  type: UPDATE_USER_SUMMARY,
  payload: {
    weight: userWeight,
    height: userHeight,
    birthday: userBirthday.format('M/D/YYYY'),
    sex: userSex.target?.value || userSex,
  },
});

export const updateUserGoalAC = (userGoal) => ({
  type: UPDATE_USER_GOAL,
  payload: {
    goal: userGoal
  }
});