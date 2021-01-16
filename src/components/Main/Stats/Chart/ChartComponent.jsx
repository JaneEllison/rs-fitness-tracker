import React from 'react';
import style from './../StatsComponent.module.css';
import { Bar } from 'react-chartjs-2';
import createChartDataset from '../../../../utils/createChartDataset';

const options = {
  responsive: true,
  maintainAspectRatio: false,
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
      },
      {
        display: false,
        id: 'workout',
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
    <article className={style.statsCanvasContainer}>
      <Bar data={data} options={options} />
    </article>
  )
}

export default ChartComponent