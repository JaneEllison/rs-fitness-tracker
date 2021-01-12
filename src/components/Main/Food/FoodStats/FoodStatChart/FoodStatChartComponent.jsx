import React from 'react';
import foodComponentConstants from '../../../../../constants/foodComponentConstants';
import style from './FoodStatChart.module.css';
import { HorizontalBar } from 'react-chartjs-2';
import getFoodChartConfig from './getFoodChartData';
import getFoodChartOptions from './getFoodChartOptions';
import { Col, Row } from 'antd';

const FoodStatChartComponent = ({stats, title, foodName}) => {
  const { foodStatsConstants } = foodComponentConstants;
  console.log(stats);
  const data = getFoodChartConfig(stats, foodName, title, foodStatsConstants);
  const options = getFoodChartOptions();

  return (
    <Row
      className={style.foodChart}
      align="center"
      justify="center"
      >
      <Col>
        <HorizontalBar
          data={data}
          options={options}
        />
      </Col>
    </Row>
  );
};

export default FoodStatChartComponent;
