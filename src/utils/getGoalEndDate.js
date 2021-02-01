const INTENSITIES = {
  'mild': 0.25 / 7,
  'normal': 0.5 / 7,
  'extreme': 1 / 7,
}

export default function getGoalEndDate({startWeight, endWeight, startDate, intensity}) {
  const date = new Date(startDate);
  let weight = startWeight;

  if (weight < endWeight) {
    while (weight < endWeight) {
      const d = date.getDate();
      date.setDate(d + 1);
      weight += INTENSITIES[intensity];
    }
    return date.toString();
  } else if (weight > endWeight) {
    while (weight > endWeight) {
      const d = date.getDate();
      date.setDate(d + 1);
      weight -= INTENSITIES[intensity];
    }
    return date.toString();
  }
}