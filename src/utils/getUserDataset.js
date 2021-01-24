import mergeHistoryWithGoal from './mergeHistoryWithGoal';
import { VALUES } from '../config/statsRadioConfig';
import { AXES, DATASETS, BASE_OPTIONS, POSITIONS } from '../config/statsChartConfig';

const {
  WEIGHT,
  WEIGHT_WITH_GOAL,
  WEIGHT_WITH_CALORIES,
  CALORIES,
  CALORIES_WITH_GOAL,
  WORKOUT_TIME,
} = VALUES;

const userDatasetCreator = {
  [WEIGHT]: (dates, weight) => ({
    data: {
      labels: dates,
      datasets: [
        {
          data: weight,
          ...DATASETS.WEIGHT,
        },
      ],
    },
    options: {
      ...BASE_OPTIONS,
      scales: {
        xAxes: [
          {
            ...AXES.DATES,
          },
        ],
        yAxes: [
          { 
            ...AXES.KILOGRAMS,
          },
        ],
      },
    },
  }),

  [WEIGHT_WITH_GOAL]: (dates, weight, goalWeight) => ({
    data: {
      labels: dates,
      datasets: [
        {
          data: weight,
          ...DATASETS.WEIGHT,
        },
        {
          data: goalWeight,
          ...DATASETS.GOAL_WEIGHT,
        },
      ],
    },
    options: {
      ...BASE_OPTIONS,
      scales: {
        xAxes: [
          {
            ...AXES.DATES,
          },
        ],
        yAxes: [
          { 
            ...AXES.KILOGRAMS,
            ticks: {
              padding: 10,
              suggestedMin: Math.min(...weight.filter(i => i), ...goalWeight.filter(i => i)) * 0.95,
              suggestedMax: Math.max(...weight, ...goalWeight) * 1.05,
            }
          },
        ],
      }
    }
  }),

  [WEIGHT_WITH_CALORIES]: (dates, weight, calories) => ({
    data: {
      labels: dates,
      datasets: [
        {
          data: weight,
          ...DATASETS.WEIGHT,
        },
        {
          data: calories,
          ...DATASETS.CALORIES,
        }
      ],
    },
    options: {
      ...BASE_OPTIONS,
      scales: {
        xAxes: [
          {
            ...AXES.DATES,
          }
        ],
        yAxes: [
          {
            ...AXES.KILOGRAMS,
            position: POSITIONS.LEFT,
          },
          {
            ...AXES.CALORIES,
            position: POSITIONS.RIGHT,
          }
        ]
      }
    }
  }),

  [CALORIES]: (dates, calories) => ({
    data: {
      labels: dates,
      datasets: [
        {
          data: calories,
          ...DATASETS.CALORIES,
        },
      ],
    },
    options: {
      ...BASE_OPTIONS,
      scales: {
        xAxes: [
          {
            ...AXES.DATES,
          }
        ],
        yAxes: [
          { 
            ...AXES.CALORIES,
          },
        ],
      },
    },
  }),

  [CALORIES_WITH_GOAL]: (dates, calories, goalCalories) => ({
    data: {
      labels: dates,
      datasets: [
        {
          data: calories,
          ...DATASETS.CALORIES,
        },
        {
          data: goalCalories,
          ...DATASETS.GOAL_CALORIES,
        }
      ],
    },
    options: {
      ...BASE_OPTIONS,
      scales: {
        xAxes: [
          {
            ...AXES.DATES,
          },
        ],
        yAxes: [
          {
            ...AXES.CALORIES,
          }
        ],
      },
    },
  }),

  [WORKOUT_TIME]: (dates, workoutTime) => ({
    data: {
      labels: dates,
      datasets: [
        {
          data: workoutTime,
          ...DATASETS.WORKOUT_TIME,
        },
      ],
    },
    options: {
      ...BASE_OPTIONS,
      scales: {
        xAxes: [
          {
            ...AXES.DATES,
            offset: true,
          }
        ],
        yAxes: [
          {
            ...AXES.MINUTES,
            ticks: {
              padding: 10,
              suggestedMax: Math.floor(Math.max(...workoutTime) * 1.05),
            }
          }
        ]
      },
    },
  }),
}

const reduceDatesArray = (arr) => arr.reduce((acc, obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    acc[key] = acc[key] ? acc[key].concat(value) : [value];
  });
  return acc;
}, {});

function getUserDataset(goal, history) {
  const {
    date: dates, 
    weight, 
    calories, 
    workoutTime
  } = reduceDatesArray(history);

  const result = {
    [WEIGHT]: userDatasetCreator[WEIGHT](dates, weight),
    [WEIGHT_WITH_CALORIES]: userDatasetCreator[WEIGHT_WITH_CALORIES](dates, weight, calories),
    [CALORIES]: userDatasetCreator[CALORIES](dates, calories),
    [WORKOUT_TIME]: userDatasetCreator[WORKOUT_TIME](dates, workoutTime),
  };

  if (goal) {
    const mergedData = mergeHistoryWithGoal(history, goal);
    const {
      date: datesWithGoal,
      weight: weightWithGoal,
      goalWeight,
      calories: caloriesWithGoal,
      goalCalories,
    } = reduceDatesArray(mergedData);

    result[WEIGHT_WITH_GOAL] = userDatasetCreator[WEIGHT_WITH_GOAL](datesWithGoal, weightWithGoal, goalWeight);
    result[CALORIES_WITH_GOAL] = userDatasetCreator[CALORIES_WITH_GOAL](datesWithGoal, caloriesWithGoal, goalCalories);
  }

  return result;
}

export default getUserDataset;