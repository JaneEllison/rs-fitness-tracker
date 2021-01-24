const updatePhysicsData = (paramName, newValue, firestore) => {
  firestore.updateProfile({[paramName]: newValue});
};

export default updatePhysicsData;
