import user from "./../dummy-user.json";

const initialState = { 
  user: user,
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return {...state};
  }
};

export default userReducer;