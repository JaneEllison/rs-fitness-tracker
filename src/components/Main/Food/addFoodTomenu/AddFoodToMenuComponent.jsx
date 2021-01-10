import React from 'react';
import { Button, InputNumber , Row, Col } from 'antd';
import foodComponentConstants from '../../../../constants/foodComponentConstants';
import addToMenuCallback from './addToMenuCallback';
import { useDispatch } from 'react-redux';

const AddFoodToMenuComponent = ({foodData, intakeWeight, changeIntakeWeight}) => {
  const {ADD_FOOD_TO_MENU_INTAKE_LABEL} = foodComponentConstants;
  const dispatch = useDispatch();
  return (
    <div>
      <Row>
        <Col span={6}>
          <span>{ADD_FOOD_TO_MENU_INTAKE_LABEL}</span>
        </Col>
        <Col span={4} offset={1}>
          <InputNumber defaultValue={100} onChange={changeIntakeWeight} />
        </Col>
        <Col span={5} offset={1}>
          <Button
            type="primary"
            onClick={() => addToMenuCallback(dispatch, foodData, intakeWeight)}
          >
            Add to ration
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddFoodToMenuComponent;
