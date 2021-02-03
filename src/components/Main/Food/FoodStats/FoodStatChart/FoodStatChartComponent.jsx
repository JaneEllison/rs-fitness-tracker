/* eslint-disable react/prop-types */
import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { Col, Row } from 'antd';
import foodComponentConstants from '../../../../../constants/foodComponentConstants';
import style from './FoodStatChart.module.css';
import getFoodChartConfig from './getFoodChartData';
import getFoodChartOptions from './getFoodChartOptions';
import foodComponentsConfig from '../../../../../config/foodComponentsConfig';

const FoodStatChartComponent = ({ stats, title, foodName }) => {
  const { foodStatsConstants } = foodComponentConstants;

  const data = getFoodChartConfig(stats, foodName, title, foodStatsConstants);
  const options = getFoodChartOptions();
  const {
    rowAlignments: {
      CENTER,
    },
  } = foodComponentsConfig;
  return (
    <Row
      className={style.foodChart}
      align={CENTER}
      justify={CENTER}
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
