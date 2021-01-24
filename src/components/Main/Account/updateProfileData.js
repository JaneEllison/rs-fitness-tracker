const updateProfileData = (paramName, newValue, firebase) => {
  firebase.updateProfile({userPhysics:{[paramName]: newValue}});
};

export const updateUserPhysicsData = (paramName, newValue, firebase) => {
  firebase.updateProfile({userPhysics:{[paramName]: newValue}});
};

export default updateProfileData;
