import foodChartColors from '../../../../../config/foodChartColors';

const getFoodChartData = (stats, foodName, title, foodStatsConstants) => {
  const {
    CKAL_CHART_COLOR,
    PROTEIN_CHART_COLOR,
    CARBS_CHART_COLOR,
    FATS_CHART_COLOR,
  } = foodChartColors;
  return {
    labels: foodStatsConstants.map((item) => item.TEXT_VALUE),
    datasets: [{
      label: `${foodName} ${title}`,
      data: stats,
      backgroundColor: [
        CKAL_CHART_COLOR,
        PROTEIN_CHART_COLOR,
        CARBS_CHART_COLOR,
        FATS_CHART_COLOR,
      ],
      borderWidth: 1,
      maintainAspectRatio: false,
      minBarLength: 5,
    },
    ],
  };
};

export default getFoodChartData;
