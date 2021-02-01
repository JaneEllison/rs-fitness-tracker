const dispatchDeleteExercise = (exerciseId, day, firebase, profile) => {
  firebase.updateProfile(
    {usersExercises:
        {[day]: [
            ...profile.usersExercises[day].filter((item) => item.id !== exerciseId)
          ]}
    },
  );
};

export default dispatchDeleteExercise;
