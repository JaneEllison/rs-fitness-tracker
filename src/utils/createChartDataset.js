import statsChartLabels from '../constants/statsChartLabels';

const chartLabels = statsChartLabels.reduce((acc, {label, value, chartJsColor}) => {
  acc[value] = {
    label,
    chartJsColor,
  };
  return acc;
}, {});

function createChartDataset(source, selection) {
  const dates = source.map(obj => obj.date);
  const data = {
    labels: dates,
    datasets: selection.map((selection) => {
      return {
        type: selection === 'workoutTime' ? 'bar' : 'line',
        fill: selection === 'workoutTime',

        data: source.map(obj => obj[selection]),
        label: chartLabels[selection].label,
        yAxisID: /weight/i.test(selection)
          ? 'weight' 
          : /calories/i.test(selection)
            ? 'calories'
            : 'workout',

        spanGaps: true,
        radius: 3,
        borderColor: chartLabels[selection].chartJsColor,
        backgroundColor: chartLabels[selection].chartJsColor,
      }
    }),
  }

  return data;
}

export default createChartDataset;