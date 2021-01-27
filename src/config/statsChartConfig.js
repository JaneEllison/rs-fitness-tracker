const DATASET_TYPES = {
  LINE: 'line',
  BAR: 'bar',
};

const AXES_TYPES = {
  LINEAR: 'linear',
  TIME: 'time',
}

const AXES = {
  KILOGRAMS: {
    id: 'kilograms',
    type: AXES_TYPES.LINEAR,
    scaleLabel: {
      display: true,
      labelString: 'Kilograms',
    },
    ticks: {
      padding: 10,
    },
  },

  CALORIES: {
    id: 'calories',
    type: AXES_TYPES.LINEAR,
    scaleLabel: {
      display: true,
      labelString: 'Calories',
    },
    ticks: {
      padding: 10,
    },
  },

  MINUTES: {
    id: 'minutes',
    type: AXES_TYPES.LINEAR,
    scaleLabel: {
      display: true,
      labelString: 'Minutes',
    },
  },

  DATES: {
    type: AXES_TYPES.TIME,
    time: {
        unit: 'day',
        tooltipFormat: 'ddd, MMM Do',
        displayFormats: {
          day: 'DD.MM.YY',
        },
    },
    ticks: {
      maxTicksLimit: 20,
      minRotation: 60,
      maxRotation: 90,
      padding: 10,
    },
  },
};

const DATASETS =  {
    WEIGHT: {
      type: DATASET_TYPES.LINE,
      yAxisID: AXES.KILOGRAMS.id,
      label: 'Your weight',

      spanGaps: true,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointBackgroundColor: '#D2B4DE',
      pointBorderColor: '#4A235A',
      backgroundColor: '#6C348344',
      borderColor: '#4A235A',
    },

    GOAL_WEIGHT: {
      type: DATASET_TYPES.LINE,
      yAxisID: AXES.KILOGRAMS.id,
      label: 'Goal weight',

      fill: false,
      radius: 0,
      pointBackgroundColor: '#45B39D',
      pointBorderColor: '#0E6655',
      borderColor: '#0E6655',
    },

    CALORIES: {
      type: DATASET_TYPES.LINE,
      yAxisID: AXES.CALORIES.id,
      label: 'Consumed calories',

      lineTension: 0,
      fill: false,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointBackgroundColor: '#FFAB91',
      pointBorderColor: '#D84315',
      borderColor: '#D84315',
    },

    GOAL_CALORIES: {
      type: DATASET_TYPES.LINE,
      yAxisID: AXES.CALORIES.id,
      label: 'Goal calories',

      fill: false,
      radius: 0,
      borderColor: '#5c0011',
    },

    WORKOUT_TIME: {
      type: DATASET_TYPES.BAR,
      yAxisID: AXES.MINUTES.id,
      label: 'Workout time',

      backgroundColor: '#4FC3F799',
      borderColor: '#0288D1',
      borderWidth: 3,
    }
};

const BASE_OPTIONS = {
  maintainAspectRatio: false,
  legend: {
    onClick: (event) => event.stopPropagation(),
  },
}

const POSITIONS = {
  LEFT: 'left',
  RIGHT: 'right',
}

export { AXES, DATASETS, BASE_OPTIONS, POSITIONS }