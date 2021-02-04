import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import style from '../FoodComponent.module.css';
import SearchFoodComponent from './SearchFood/SearchFoodComponent';
import AddFoodToMenuComponent from './addFoodToMenu/AddFoodToMenuComponent';
import foodComponentsConfig from '../../../../config/foodComponentsConfig';

const FoodActionsComponent = ({
  foodData,
  intakeWeight,
  intakeTime,
  setIntakeWeight,
  setIntakeTime,
}) => {
  const {
    rowAlignments: {
      CENTER, SPACE_BETWEEN,
    },
  } = foodComponentsConfig;
  return (
    <Row
      className={style.searchBar}
      align={CENTER}
      justify={SPACE_BETWEEN}
      style={{
        marginBottom: 30,
      }}
    >
      <Col
        span={22}
        xl={{ span: 10 }}
      >
        <SearchFoodComponent />
      </Col>
      <Col
        span={22}
        xl={{ span: 14 }}
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
  );
};

FoodActionsComponent.propTypes = {
  foodData: PropTypes.object.isRequired,
  intakeWeight: PropTypes.number.isRequired,
  setIntakeWeight: PropTypes.func.isRequired,
  intakeTime: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  setIntakeTime: PropTypes.func.isRequired,
};

export default FoodActionsComponent;
