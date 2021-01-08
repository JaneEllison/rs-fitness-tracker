import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFoodToMenuAC } from '../../../store/FoodMenuReducer/foodMenureducer';
import { Button, InputNumber , Row, Col } from 'antd';
import foodComponentConstants from '../../../constants/foodComponentConstants';

const AddFoodToMenuComponent = ({foodData}) => {
  const {ADD_FOOD_TO_MENU_INTAKE_LABEL} = foodComponentConstants;

  const [intakeWeight, setIntakeWeight] = useState(100);

  const dispatch = useDispatch();

  const addFoodToMenu = (food, weight) => {
    dispatch(fetchFoodToMenuAC({
      ...food, weight
    }))
  };

  return (
    <div>
      <Row>
        <Col span={2}>
          <span>{ADD_FOOD_TO_MENU_INTAKE_LABEL}</span>
        </Col>
        <Col span={4} offset={1}>
          <InputNumber defaultValue={100} onChange={(value) => setIntakeWeight(value)} />
        </Col>
        <Col span={5} offset={1}>
          <Button type="primary">Add to ration</Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddFoodToMenuComponent;
