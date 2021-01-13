import React from 'react';
import { Bar } from 'react-chartjs-2';
import createChartDatasets from './../../../../helpers/createChartDatasets';

const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    onClick: (event) => event.stopPropagation(),
  }
}

function ChartComponent({
  selectedFields,
  goalDates,
  goalWeight,
  goalCalories,
  dates,
  weight,
  calories,
  workouts
}) {
  const data = [
    weight,
    calories,
    workouts,
  ];

  const goalData = [
    goalWeight,
    goalCalories,
  ]

  return (
    // <Bar data={data} options={options} />
    <div>{selectedFields}</div>
  )
}

export default ChartComponent