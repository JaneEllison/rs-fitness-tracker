import { LOGIN_USER, LOGOUT_USER } from './authReducerActionTypes';

const initialState = {
  auth: true,
  currentUser: {
    userName: 'Yuretz123',
    userEmail: 'lololo123@gmail.com',
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        auth: true,
        currentUser: action.payload,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        auth: false,
        currentUser: {},
      };
    }
    default:
      return state;
  }
};

export default authReducer;
