import React from 'react';
import foodComponentConstants from '../../../../../constants/foodComponentConstants';
import { HorizontalBar } from 'react-chartjs-2';
import getFoodChartConfig from './getFoodChartData';
import getFoodChartOptions from './getFoodChartOptions';

const FoodStatChart = ({stats, title, foodName}) => {
  const { foodStatsConstants } = foodComponentConstants;
  console.log(stats);
  const data = getFoodChartConfig(stats, foodName, title, foodStatsConstants);
  const options = getFoodChartOptions();

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
