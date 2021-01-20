import { Col, Row } from 'antd';
import style from '../FoodComponent.module.css';
import SearchFoodComponent from './SearchFood/SearchFoodComponent';
import AddFoodToMenuComponent from './addFoodToMenu/AddFoodToMenuComponent';
import React from 'react';
import foodComponentsConfig from '../../../../config/foodComponentsConfig';

const FoodActionsComponent = ({
    foodData,
    intakeWeight,
    intakeTime,
    setIntakeWeight,
    setIntakeTime
  }) => {
  const { rowAlignments: {
      CENTER, SPACE_BETWEEN,
    }} = foodComponentsConfig;
  return (
    <Row
      className={style.searchBar}
      gutter={[40, 20]}
      lg={[40, 0]}
      align={CENTER}
      justify={SPACE_BETWEEN}
    >
      <Col
        span={22}
        lg={{span: 12}}
      >
        <SearchFoodComponent />
      </Col>
      <Col
        span={22}
        lg={{span: 12}}
      >
        <AddFoodToMenuComponent
          foodData={foodData}
          intakeWeight={intakeWeight}
          intakeTime={intakeTime}
          changeIntakeWeight={(value) => setIntakeWeight(value)}
          changeIntakeTime={(value) => setIntakeTime(value)}
        />
      </Col>
    </Row>
  )
};

export default FoodActionsComponent;
