import {
  OPTIONS, 
  TITLES, 
  COLORS, 
  AXES 
} from './../constants/statsChartConstants';

export default {
  [OPTIONS.WEIGHT]: {
    datasets: [
      { 
        label: TITLES.WEIGHT, 
        color: COLORS.WEIGHT,
        yAxisID: AXES.KILOGRAMS.ID,
      },
    ],
  },

  [OPTIONS.WEIGHT_WITH_GOAL]: {
    datasets: [
      { 
        label: TITLES.WEIGHT, 
        color: COLORS.WEIGHT,
        yAxisID: AXES.KILOGRAMS.ID,
      },
      { 
        label: TITLES.GOAL_WEIGHT, 
        color: COLORS.GOAL_WEIGHT,
        yAxisID: AXES.KILOGRAMS.ID,
      },
    ],
  },

  [OPTIONS.WEIGHT_WITH_CALORIES]: {
    datasets: [
      { 
        label: TITLES.WEIGHT, 
        color: COLORS.WEIGHT,
        yAxisID: AXES.KILOGRAMS.ID,
      },
      { 
        label: TITLES.CALORIES, 
        color: COLORS.CALORIES,
        yAxisID: AXES.CALORIES.ID,
      },
    ],
  },

  [OPTIONS.CALORIES]: {
    datasets: [
      { 
        label: TITLES.CALORIES, 
        color: COLORS.CALORIES,
        yAxisID: AXES.CALORIES.ID,
      },
    ],
  },

  [OPTIONS.CALORIES_WITH_GOAL]: {
    datasets: [
      { 
        label: TITLES.CALORIES, 
        color: COLORS.CALORIES,
        yAxisID: AXES.CALORIES.ID,
      },
      { 
        label: TITLES.GOAL_CALORIES, 
        color: COLORS.GOAL_CALORIES,
        yAxisID: AXES.CALORIES.ID,
      },
    ],
  },

  [OPTIONS.WORKOUT_TIME]: {
    datasets: [
      { 
        label: TITLES.workoutTime, 
        color: COLORS.workoutTime,
        yAxisID: AXES.MINUTES.ID,
      },
    ]
  },
};