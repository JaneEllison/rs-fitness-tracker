import React from 'react';
import { Bar } from 'react-chartjs-2';
import createChartDataset from '../../../../utils/createChartDataset';

const options = {
  responsive: true,
  // maintainAspectRatio: false,
  legend: {
    onClick: (event) => event.stopPropagation(),
  },
  scales: {
    yAxes: [
      {
        id: 'weight',
        type: 'linear',
        position: 'left',
      }, 
      {
        id: 'calories',
        type: 'linear',
        position: 'right',
      }
    ]
  }
};

function ChartComponent({
  selectedFields,
  dataset,
}) {
  const data = createChartDataset(dataset, selectedFields);

  return (
    <Bar data={data} options={options} />
  )
}

export default ChartComponent