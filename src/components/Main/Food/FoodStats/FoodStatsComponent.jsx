import React from 'react';
import FoodStatChartComponent from './FoodStatChart/FoodStatChartComponent';
import foodComponentConstants from '../../../../constants/foodComponentConstants';
import { Row, Col } from 'antd';
import {calculateNutrientsByWeightForArray} from '../../../../utils/calculateNutrientsByWeight';
import checkArrayForNullUndefNaN from '../../../../utils/checkArrayForNullUndefNaN';
import foodComponentsConfig from '../../../../config/foodComponentsConfig';
import FoodImageComponent from './FoodImage/FoodImageComponent';

const FoodStatsComponent = ({foodData, intakeWeight}) => {
  const {foodStatsTypes: {
    FOOD_STATS_PER_100_GR,
    FOOD_STATS_FOR_INTAKE,
  }} = foodComponentConstants;
  const {
    rowAlignments: {
      CENTER,
    }} = foodComponentsConfig;
  console.log(foodData);
  const {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
    photo
    } = foodData;
  const transformedFoodData = [nf_calories, nf_total_fat, nf_total_carbohydrate, nf_protein, photo];
  const foodDataForIntake = calculateNutrientsByWeightForArray(transformedFoodData, intakeWeight);

  return checkArrayForNullUndefNaN(transformedFoodData)
    ? <Row gutter={50} align={CENTER}>
        <Col
          span={24}
          md={{span: 4}}
        >
          <FoodImageComponent imagePath={photo.thumb} />
        </Col>
        <Col
          span={24}
          md={{span: 10}}
        >
          <FoodStatChartComponent stats={transformedFoodData} title={FOOD_STATS_PER_100_GR} foodName={food_name} />
        </Col>
        <Col
          span={24}
          md={{span: 10}}
        >
          <FoodStatChartComponent stats={foodDataForIntake} title={FOOD_STATS_FOR_INTAKE} foodName={food_name} />
        </Col>
      </Row>
    : <div/>
};

export default FoodStatsComponent;
