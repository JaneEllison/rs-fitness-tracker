import user from '../dummy-user.json';
import {
  UPDATE_USER_SUMMARY,
  UPDATE_USER_GOAL,
} from './userReducerActionTypes';

const initialState = {
  user,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_SUMMARY:
    case UPDATE_USER_GOAL:
      return {
        user: {
          ...user,
          summary: {
            ...user.summary,
            ...action.payload,
          },
        },
      };
    default:
      return { ...state };
  }
};

export default userReducer;
