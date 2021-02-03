const getExercisesForDay = (daysArray, exercisesObject) => {
  if (!exercisesObject) {
    return daysArray;
  }

  const daysInFirebase = Object.keys(exercisesObject);

  if (daysInFirebase.length <= 0) {
    return daysArray;
  }

  return daysArray.map((day) => (daysInFirebase.some((dayInFb) => day.name === dayInFb)
    ? { ...day, exercises: [...exercisesObject[day.name]] }
    : { ...day }));
};

export default getExercisesForDay;
