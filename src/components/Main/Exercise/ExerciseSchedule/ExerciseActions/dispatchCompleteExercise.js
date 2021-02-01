const dispatchCompleteExercise = (exerciseId, day, firebase, profile) => {

  const selectedExerciseIndex = profile.usersExercises[day]
    .findIndex((item) => {
      return item.id === exerciseId
    });

  const newArrayOfExercises = profile.usersExercises[day];
  newArrayOfExercises[selectedExerciseIndex] = {
    ...profile.usersExercises[day][selectedExerciseIndex],
    isComplete: true,
  };
  firebase.updateProfile(
    {usersExercises:
      {[day]: [
          ...newArrayOfExercises
        ]}
    },
  );
};

export default dispatchCompleteExercise;
