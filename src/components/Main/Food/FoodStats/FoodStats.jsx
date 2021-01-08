import React from 'react';
import FoodStatChart from './FoodStatChart';
import foodComponentConstants from '../../../../constants/foodComponentConstants';
import { Row, Col } from 'antd';

const FoodStats = ({foodData}) => {

  const {foodStatsTypes: {FOOD_STATS_PER_100_GR}} = foodComponentConstants;

  const {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein
    } = foodData;
  const transformedFoodData = [nf_calories, nf_total_fat, nf_total_carbohydrate, nf_protein];
  console.log(FOOD_STATS_PER_100_GR);
  return (
    <Row>
      <Col span={6}>
        <FoodStatChart stats={transformedFoodData} title={FOOD_STATS_PER_100_GR} foodName={food_name} />
      </Col>
    </Row>
  );
};

export default FoodStats;
