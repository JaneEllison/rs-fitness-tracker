import setNewMenuItemId from '../../../../../utils/setNewMenuItemId';

const addExercise = (exercise, day, firebase, profile) => {
  if (profile.usersExercises && profile.usersExercises[day]) {
    firebase.updateProfile(
      {
        usersExercises:
          {
            [day]: [
              ...profile.usersExercises[day],
              setNewMenuItemId(profile.usersExercises[day], exercise),
            ],
          },
      },
    );
  } else {
    firebase.updateProfile({
      usersExercises: {
        [day]: [
          { ...exercise, id: 0 },
        ],
      },
    });
  }
};

export default addExercise;
