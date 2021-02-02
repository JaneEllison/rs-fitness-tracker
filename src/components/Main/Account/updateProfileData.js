const updateProfileData = (paramName, newValue, firebase) => {
  firebase.updateProfile({ [paramName]: newValue });
};

export const updateUserPhysicsData = (paramName, newValue, firebase) => {
  firebase.updateProfile({ userPhysics: { [paramName]: newValue } });
};
export const updateAllPhysicsData = (newValues, firebase) => {
  firebase.updateProfile({
    userPhysics:{
      ...newValues
    }
  });
};
export const updateUserGoalsData = (newValues, firebase) => {
  firebase.updateProfile({
    userGoals:{
      ...newValues
    }
  });
};
export const updateUserHistoryData = (newValue, firebase, userHistory) => {
  if (userHistory[userHistory.length - 1].date === newValue.date) {
    const newHistory = [...userHistory];
    newHistory[userHistory.length - 1] = newValue;
    firebase.updateProfile({
      userHistory:[
        ...newHistory
      ]
    });
  } else {
    const newHistory = [...userHistory];
    firebase.updateProfile({
      userHistory:[
        ...newHistory,
        newValue
      ]
    });
  }

};

export default updateProfileData;
