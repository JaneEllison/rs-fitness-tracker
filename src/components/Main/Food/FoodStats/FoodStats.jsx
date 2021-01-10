import React from 'react';
import FoodStatChart from './FoodStatChart/FoodStatChart';
import foodComponentConstants from '../../../../constants/foodComponentConstants';
import { Row, Col } from 'antd';
import {calculateNutrientsByWeightForArray} from '../../../../utils/calculateNutrientsByWeight';

const FoodStats = ({foodData, intakeWeight}) => {
  const {foodStatsTypes: {
    FOOD_STATS_PER_100_GR,
    FOOD_STATS_FOR_INTAKE,
  }} = foodComponentConstants;
  const {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
    } = foodData;
  const transformedFoodData = [nf_calories, nf_total_fat, nf_total_carbohydrate, nf_protein];
  const foodDataForIntake = calculateNutrientsByWeightForArray(transformedFoodData, intakeWeight);
  console.log(foodData);
  return (
    <Row>
      <Col span={6}>
        <FoodStatChart stats={transformedFoodData} title={FOOD_STATS_PER_100_GR} foodName={food_name} />
      </Col>
      <Col span={6}>
        <FoodStatChart stats={foodDataForIntake} title={FOOD_STATS_FOR_INTAKE} foodName={food_name} />
      </Col>
    </Row>
  );
};

export default FoodStats;
