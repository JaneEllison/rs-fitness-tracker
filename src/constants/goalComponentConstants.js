const getWarningString = (goal, gender, safeCal) => {
  const part1 = 'Losing weight at';
  const part2 = 'kCal per day is not safe for you. Minimal daily caloric rate for';
  const part3 = 's is';
  const part4 = 'kCal.';

  return `${part1} ${goal} ${part2} ${gender} ${part3} ${safeCal} ${part4}`;
};

const getConfirmString = (goal) => {
  const part1 = 'Update goal to';
  const part2 = 'kCal?';

  return `${part1} ${goal} ${part2}`;
};

const showCalories = (cal) => (cal ? `${cal} kCal` : 'not set');

export default {
  SHOW_CALORIES: showCalories,
  GOAL: {
    MODAL: {
      WARNING_TITLE: 'Safety warning!',
      WARNING_CONSTRUCTOR: getWarningString,
      WARNING_INSTRUCTION: 'Please change goal parameters or consult your physician',

      CONFIRM_TITLE: 'Confirm new goal calories',
      CONFIRM_CONSTRUCTOR: getConfirmString,

      REMOVE_TITLE: 'Clear current goal?',
      REMOVE_TEXT: 'Are you sure you want to remove the current caloric goal?',
    },

    GOAL_HEADING: 'Goal settings',
    CURRENT_CALORIES_LABEL: 'Current goal calories: ',
    WEIGHT_PLAN_LABEL: 'I want to: ',
    INTENSITY_LABEL: 'How intensely: ',
    ACTIVITY_LABEL: 'My activity level:',
    NEW_GOAL_HEADING: 'New goal calories: ',
    BUTTON_TEXT: 'Set new goal',
  },

  PHYSICS: {
    MODAL: {
      TITLE: 'Confirm new user parameters',
      WEIGHT_LABEL: 'Weight: ',
      GET_WEIGHT_STRING: (weight) => `${weight} kg`,
      HEIGHT_LABEL: 'Height: ',
      GET_HEIGHT_STRING: (height) => `${height} cm`,
      DATE_OF_BIRTH_LABEL: 'Date of birth: ',
      DATE_OF_BIRTH_LOCALE: 'MMMM Do YYYY',
      AGE_LABEL: 'Age: ',
      GET_AGE_STRING: (age) => `${age} y.o.`,
      GENDER_LABEL: 'Gender: ',
    },

    PHYSICS_HEADING: 'Your physical parameters:',
    WEIGHT_LABEL: 'Weight, kg:',
    MIN_WEIGHT: 25,
    HEIGHT_LABEL: 'Height, cm:',
    MIN_HEIGHT: 100,
    DATE_OF_BIRTH_LABEL: 'Date of birth:',
    GENDER_LABEL: 'Gender:',

    BUTTON_TEXT: 'Update stats',
  },
};
