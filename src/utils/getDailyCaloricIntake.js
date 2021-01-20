const MET_RATES = {
  "bmr": 1,
  "sedentary": 1.5,
  "light": 2,
  "moderate": 3,
  "active": 4,
  "veryActive": 5.5,
  "extraActive": 7.5,
};

function getHarrisBenedictRMR(age, sex, height, weight) {
  return sex === 'male'
    ? 66.4730 + (5.0033 * height) + (13.7516 * weight) - (6.7550 * age)
    : 655.0955 + (1.8496 * height) + (9.5634 * weight) - (4.6756 * age);
}

function getCorrectedRMR({
  age, 
  sex, 
  weight,
  height 
}) {
  return (getHarrisBenedictRMR(age, sex, height, weight) * 25 * weight) / 7
}

function getDailyGoalCaloricIntake(summary, activity) {
  const met = MET_RATES[activity];
  const rmr = getCorrectedRMR(summary);
  
  return (met * 3.5) / rmr;
}

export default getDailyGoalCaloricIntake;