const getFoodChartOptions = () => ({
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      },
    ],
  },
});

export default getFoodChartOptions;
