import React from 'react';
import foodComponentConstants from '../../../../constants/foodComponentConstants';
import { HorizontalBar } from 'react-chartjs-2';

const FoodStatChart = ({stats, title, foodName}) => {
  const { foodStatsConstants } = foodComponentConstants;
  console.log(stats);
  const data = {
    labels: foodStatsConstants.map((item) => item.TEXT_VALUE),
    datasets: [{
      label: `${foodName} ${title}`,
      data: stats,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        ],
      borderWidth: 1,
      maintainAspectRatio: false,
      minBarLength: 5,
      },
    ],
  };
  const options = {
    scales: {
      xAxes:[
        {
          gridLines: {
            drawOnChartArea: false,
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          }
        },
      ],
    },
  };
  return (
    <div style={{
      width: '300px',
      height: '400px',
    }}>
      <HorizontalBar
        data={data}
        options={options}
      />
    </div>
  );
};

export default FoodStatChart;
