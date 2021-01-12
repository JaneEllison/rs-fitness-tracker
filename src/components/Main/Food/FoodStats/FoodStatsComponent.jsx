import React from 'react';
import FoodStatChartComponent from './FoodStatChart/FoodStatChartComponent';
import foodComponentConstants from '../../../../constants/foodComponentConstants';
import { Row, Col } from 'antd';
import {calculateNutrientsByWeightForArray} from '../../../../utils/calculateNutrientsByWeight';
import checkArrayForNullUndefNaN from '../../../../utils/checkArrayForNullUndefNaN';

const FoodStatsComponent = ({foodData, intakeWeight}) => {
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

  return checkArrayForNullUndefNaN(transformedFoodData)
    ? <Row gutter={50} >
        <Col span={6}>
          <FoodStatChartComponent stats={transformedFoodData} title={FOOD_STATS_PER_100_GR} foodName={food_name} />
        </Col>
        <Col span={6} offset={2}>
          <FoodStatChartComponent stats={foodDataForIntake} title={FOOD_STATS_FOR_INTAKE} foodName={food_name} />
        </Col>
      </Row>
    : <div/>
};

export default FoodStatsComponent;
