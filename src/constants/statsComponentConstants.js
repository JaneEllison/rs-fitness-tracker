export default {
  GET_STRING: (str, unit) => (str ? `${str}${unit}` : 'not set'),

  AGE_HEADING: 'Age:',
  AGE_UNIT: ' year',
  GENDER_HEADING: 'Gender: ',
  GENDER_UNIT: '',
  HEIGHT_HEADING: 'Height: ',
  HEIGHT_UNIT: ' cm',
  WEIGHT_HEADING: 'Weight: ',
  WEIGHT_UNIT: ' kg',
  GOAL_HEADING: 'Goal calories: ',
  GOAL_UNIT: ' / day',
};
