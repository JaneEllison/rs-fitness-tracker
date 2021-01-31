import user from './../dummy-user.json';
import { UPDATE_USER_SUMMARY } from './userReducerActionTypes';

const initialState = { 
  user: user,
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_USER_SUMMARY: 
      return {
        user: {
          ...user,
          summary: {
            ...action.payload,
          },
        }
      }
    default:
      return {...state};
  }
};

export default userReducer;