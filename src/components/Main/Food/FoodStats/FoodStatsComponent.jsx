import React from 'react';
import FoodStatChartComponent from './FoodStatChart/FoodStatChartComponent';
import foodComponentConstants from '../../../../constants/foodComponentConstants';
import { Row, Col } from 'antd';
import {calculateNutrientsByWeightForArray} from '../../../../utils/calculateNutrientsByWeight';
import checkArrayForNullUndefNaN from '../../../../utils/checkArrayForNullUndefNaN';
import foodComponentsConfig from '../../../../config/foodComponentsConfig';
import FoodImageComponent from './FoodImage/FoodImageComponent';
import FoodStatCardComponent from './FoodStatCard/FoodStatCardComponent';
import { useSelector } from 'react-redux';
import { foodPhotoSelector } from '../../../../store/Selectors/foodSelector';

const FoodStatsComponent = ({foodData, intakeWeight}) => {
  const photo = useSelector(foodPhotoSelector);
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
    nf_protein
    } = foodData;

  const transformedFoodData = [nf_calories, nf_total_fat, nf_total_carbohydrate, nf_protein, photo];
  const foodDataForIntake = calculateNutrientsByWeightForArray(transformedFoodData, intakeWeight);
  console.log(foodDataForIntake);
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
          md={{span: 8}}
        >
          <FoodStatCardComponent
            foodPhoto={photo.thumb}
            title={FOOD_STATS_PER_100_GR}
            foodData={foodData}
            foodName={food_name}
          />
        </Col>
        <Col
          span={24}
          md={{span: 8}}
        >
          <FoodStatCardComponent
            foodPhoto={photo.thumb}
            title={FOOD_STATS_FOR_INTAKE}
            foodData={foodData}
            foodName={food_name}
          />
        </Col>
        <Col
          span={24}
          md={{span: 6}}
        >
        </Col>
        <Col
          span={24}
          md={{span: 6}}
        >
        </Col>
      </Row>
    : <div/>
};

export default FoodStatsComponent;
