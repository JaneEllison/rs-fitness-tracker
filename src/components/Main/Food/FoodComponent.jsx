import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { NavLink } from 'react-router-dom';
import foodSelector from '../../../store/Selectors/foodSelector';
import FoodTableComponent from './FoodTable/FoodTableComponent';
import foodComponentConstants from '../../../constants/foodComponentConstants';
import foodComponentsConfig from '../../../config/foodComponentsConfig';
import FoodActionsComponent from './FoodActions/FoodActionsComponent';
import FoodInfoComponent from './FoodInfo/FoodInfoComponent';
import profileSelector from '../../../store/Selectors/profileSelector';

const FoodComponent = () => {
  const {
    rowAlignments: {
      CENTER, SPACE_BETWEEN,
    },
  } = foodComponentsConfig;
  const { FOOD_COMPONENT_INITIAL_INTAKE_WEIGHT } = foodComponentConstants;
  const [intakeWeight, setIntakeWeight] = useState(FOOD_COMPONENT_INITIAL_INTAKE_WEIGHT);
  const [intakeTime, setIntakeTime] = useState('');
  const foodData = useSelector(foodSelector);
  const profile = useSelector(profileSelector);

  return (
    <Row
      align={CENTER}
      justify={SPACE_BETWEEN}
    >
      <Col span={24}>
        <FoodActionsComponent
          foodData={foodData}
          intakeWeight={intakeWeight}
          intakeTime={intakeTime}
          setIntakeWeight={setIntakeWeight}
          setIntakeTime={setIntakeTime}
        />
        <FoodInfoComponent
          foodData={foodData}
          intakeWeight={intakeWeight}
        />
        {
            !isLoaded(profile) && <div>Loading...</div>
          }
        {
            isEmpty(profile)
            && (
            <NavLink to="/signin">
              You have to register or log in to manage your food table
            </NavLink>
            )
          }
        {
            isLoaded(profile) && !isEmpty(profile) && <FoodTableComponent />
          }
      </Col>
    </Row>
  );
};

export default FoodComponent;
