const OPTIONS = {
  WEIGHT: 'weight',
  WEIGHT_WITH_GOAL: 'weightWithGoal',
  WEIGHT_WITH_CALORIES: 'weightWithCalories',
  CALORIES: 'calories',
  CALORIES_WITH_GOAL: 'caloriesWithGoal',
  WORKOUT_TIME: 'workoutTime',
};

const RADIO_LABELS = {
  WEIGHT: 'Weight',
  WEIGHT_WITH_GOAL: 'Weight w/ goal',
  WEIGHT_WITH_CALORIES: 'Weight w/ calories',
  CALORIES: 'Calories',
  CALORIES_WITH_GOAL: 'Calories w/ goal',
  WORKOUT_TIME: 'Time working out',
}

const TITLES = {
  WEIGHT: 'Your weight',
  GOAL_WEIGHT: 'Goal weight',
  CALORIES: 'Consumed calories',
  GOAL_CALORIES: 'Goal calories',
  WORKOUT_TIME: 'Workout time',
};

const COLORS = {
  WEIGHT: '#d4380d',
  GOAL_WEIGHT: '#5b8c00',
  CALORIES: '#531dab',
  GOAL_CALORIES: '#2f54eb',
  WORKOUT_TIME: '#5c0011',
};

const AXES = {
  KILOGRAMS: {
    ID: 'kilograms',
  },

  CALORIES: {
    ID: 'calories',
  },

  MINUTES: {
    ID: 'minutes',
  },
};

export { 
  OPTIONS, 
  RADIO_LABELS, 
  TITLES, 
  COLORS, 
  AXES 
};