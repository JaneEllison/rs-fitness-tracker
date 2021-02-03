const dispatchChangeExerciseName = (exerciseId, newName, day, profile, firebase) => {
  const selectedExerciseIndex = profile.usersExercises[day]
    .findIndex((item) => item.id === exerciseId);

  const newArrayOfExercises = profile.usersExercises[day];
  newArrayOfExercises[selectedExerciseIndex] = {
    ...profile.usersExercises[day][selectedExerciseIndex],
    title: newName,
  };
  firebase.updateProfile(
    {
      usersExercises:
      {
        [day]: [
          ...newArrayOfExercises,
        ],
      },
    },
  );
};

export default dispatchChangeExerciseName;
