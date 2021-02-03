const GOALS = [
  {
    value: 'maintain',
    label: 'Maintain weight',
  },
  {
    value: 'Loss',
    label: 'Lose weight',
  },
  {
    value: 'Gain',
    label: 'Gain weight',
  },
];

const ACTIVITIES = [
  {
    value: 'sedentary',
    label: 'Sedentary',
  },
  {
    value: 'light',
    label: 'Light',
  },
  {
    value: 'moderate',
    label: 'Moderate',
  },
  {
    value: 'active',
    label: 'Active',
  },
  {
    value: 'veryActive',
    label: 'Very Active',
  },
  {
    value: 'extraActive',
    label: 'Extra Active',
  },
];

const INTENSITIES = [
  {
    value: 'mild',
    label: 'Slowly',
  },
  {
    value: 'normal',
    label: 'Normally',
  },
  {
    value: 'extreme',
    label: 'Fast',
  },
];

const ACTIVITY_DESCRIPTIONS = {
  sedentary: 'Little or no physical activity',
  light: 'Exercise 1-3 times per week, up to 30 minutes each',
  moderate: 'Exercise 4-5 times per week, up to 30 minutes each',
  active: 'Daily exercise or intense exercise 3-4 times per week, up to 120 minutes each',
  veryActive: 'Intense exercise 3-4 times per week, up to 120 minutes each',
  extraActive: 'Very intense exercise daily (over 120 minutes), or physical job',
};

const INTENSITY_DESCRIPTIONS = {
  mild: '0.5lb (0.225 kg) per week',
  normal: '1lb (0.45 kg) per week',
  extreme: '2lb (0.9kg) per week',
};

export {
  ACTIVITIES,
  INTENSITIES,
  GOALS,
  ACTIVITY_DESCRIPTIONS,
  INTENSITY_DESCRIPTIONS,
};
