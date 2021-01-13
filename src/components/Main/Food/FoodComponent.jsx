import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import foodSelector from '../../../store/Selectors/foodSelector';
import { Row, Col} from 'antd';
import FoodTableComponent from './FoodTable/FoodTableComponent';
import foodComponentConstants from '../../../constants/foodComponentConstants';
import foodComponentsConfig from '../../../config/foodComponentsConfig';
import FoodActionsComponent from './FoodActions/FoodActionsComponent';
import FoodInfoComponent from './FoodInfo/FoodInfoComponent';

const FoodComponent = () => {
  const {
    rowAlignments: {
      CENTER, SPACE_BETWEEN,
    }} = foodComponentsConfig;
  const {FOOD_COMPONENT_INITIAL_INTAKE_WEIGHT} = foodComponentConstants;
  const [intakeWeight, setIntakeWeight] = useState(FOOD_COMPONENT_INITIAL_INTAKE_WEIGHT);
  const [intakeTime, setIntakeTime] = useState('');
  const foodData = useSelector(foodSelector);

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
          <FoodTableComponent />
        </Col>
      </Row>
  );
};

export default FoodComponent;
