const updateProfileData = (paramName, newValue, firebase) => {
  firebase.updateProfile({[paramName]: newValue});
};

export const updateUserPhysicsData = (paramName, newValue, firebase) => {
  firebase.updateProfile({userPhysics:{[paramName]: newValue}});
};
export const updateAllPhysicsData = (newValues, firebase) => {
  console.log(newValues);
  firebase.updateProfile({
    userPhysics:{
      ...newValues
    }
  });
};
export const updateUserGoalsData = (newValues, firebase) => {
  console.log(newValues);
  firebase.updateProfile({
    userGoals:{
      ...newValues
    }
  });
};

export default updateProfileData;
