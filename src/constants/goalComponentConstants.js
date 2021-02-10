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
    },

    GOAL_HEADING: 'Goal settings',
    CURRENT_CALORIES_LABEL: 'Current goal calories:',
    INTENSITY_LABEL: 'How intensely:',
    ACTIVITY_LABEL: 'My activity level:',
  },
};
