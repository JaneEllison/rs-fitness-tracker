const ACTIVITIES = {
  'basal': {
    MET: 1,
    WEEKLY_MINUTES: 1440,
  },
  'sedentary': {
    MET: 1.5,
    WEEKLY_MINUTES: 1440,
  },
  'light': {
    MET: 2,
    WEEKLY_MINUTES: 45,
  },
  'moderate': {
    MET: 3,
    WEEKLY_MINUTES: 150,
  },
  'active': {
    MET: 4,
    WEEKLY_MINUTES: 300,
  },
  'veryActive': {
    MET: 5.5,
    WEEKLY_MINUTES: 700,
  },
  'extraActive': {
    MET: 7.5,
    WEEKLY_MINUTES: 850,
  },
};

function getHarrisBenedictRMR({age, sex, height, weight}) {
  return sex === 'male'
    ? 66.4730 + (5.0033 * height) + (13.7516 * weight) - (6.7550 * age)
    : 655.0955 + (1.8496 * height) + (9.5634 * weight) - (4.6756 * age);
}

function getCorrectedMET(summary, activity) {
  const RMR = getHarrisBenedictRMR(summary);
  const convertedRMR = (RMR * 1000) / (1440 * 5 * summary.weight);
  const MET = ACTIVITIES[activity].MET;
  return MET * (3.5 / convertedRMR);
}

function getNormativeDailyCaloricIntake(summary, activity) {
  const MET = getCorrectedMET(summary, activity);
  const time = ACTIVITIES[activity].WEEKLY_MINUTES;
  
  return (MET * time);
}

const summary = {
  age: 25,
  height: 188,
  weight: 100,
  sex: 'male',
};

export default getDailyGoalCaloricIntake;