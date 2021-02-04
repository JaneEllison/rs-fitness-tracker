/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import foodComponentConstants from '../../../../constants/foodComponentConstants';
import { calculateNutrientsByWeight } from '../../../../utils/calculateNutrientsByWeight';
import checkArrayForNullUndefNaN from '../../../../utils/checkArrayForNullUndefNaN';
import foodComponentsConfig from '../../../../config/foodComponentsConfig';
import FoodStatCardComponent from './FoodStatCard/FoodStatCardComponent';
import { foodPhotoSelector } from '../../../../store/Selectors/foodSelector';
import FoodToReachGoalComponent from '../FoodToReachGoal/FoodToReachGoalComponent';

const FoodStatsComponent = ({ foodData, intakeWeight }) => {
  const photo = useSelector(foodPhotoSelector);
  const {
    foodStatsTypes: {
      FOOD_STATS_PER_100_GR,
      FOOD_STATS_FOR_INTAKE,
    },
  } = foodComponentConstants;
  const {
    rowAlignments: {
      CENTER,
    },
  } = foodComponentsConfig;

  const {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
  } = foodData;

  const dataPer100Gr = {
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
  };

  const dataForIntake = {
    ...calculateNutrientsByWeight({
      nf_calories,
      nf_total_fat,
      nf_total_carbohydrate,
      nf_protein,
    }, intakeWeight),
  };

  return checkArrayForNullUndefNaN(foodData)
    ? (
      <Row gutter={20} align={CENTER} style={{ marginBottom: 20 }}>
        <Col
          xs={24}
          lg={{ span: 8 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <FoodStatCardComponent
            foodPhoto={photo.thumb}
            title={FOOD_STATS_PER_100_GR}
            foodData={dataPer100Gr}
            foodName={food_name}
          />
        </Col>
        <Col
          span={24}
          lg={{ span: 8 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <FoodStatCardComponent
            foodPhoto={photo.thumb}
            title={FOOD_STATS_FOR_INTAKE}
            foodData={dataForIntake}
            foodName={food_name}
          />
        </Col>
        <Col
          span={24}
          lg={{ span: 8 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <FoodToReachGoalComponent
            intakeCalories={1400}
            foodName={food_name}
          />
        </Col>
      </Row>
    )
    : <div />;
};

export default FoodStatsComponent;
