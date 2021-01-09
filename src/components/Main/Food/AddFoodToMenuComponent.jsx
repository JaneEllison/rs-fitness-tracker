import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFoodToMenuAC } from '../../../store/FoodMenuReducer/foodMenureducer';
import { Button, InputNumber , Row, Col } from 'antd';
import foodComponentConstants from '../../../constants/foodComponentConstants';
import calculateNutrientsByWeight from '../../../utils/calculateNutrientsByWeight';

const AddFoodToMenuComponent = ({foodData}) => {
  const {ADD_FOOD_TO_MENU_INTAKE_LABEL} = foodComponentConstants;

  const [intakeWeight, setIntakeWeight] = useState(100);

  const dispatch = useDispatch();

  const addFoodToMenu = (weight) => {
    const {
      food_name,
      nf_calories,
      nf_total_fat,
      nf_total_carbohydrate,
      nf_protein,
    } = foodData;

    dispatch(fetchFoodToMenuAC({
      food_name,
      ...calculateNutrientsByWeight({nf_calories,
      nf_total_fat,
      nf_total_carbohydrate,
      nf_protein}, weight),
      weight,
    }))
  };
  console.log(foodData);

  return (
    <div>
      <Row>
        <Col span={6}>
          <span>{ADD_FOOD_TO_MENU_INTAKE_LABEL}</span>
        </Col>
        <Col span={4} offset={1}>
          <InputNumber defaultValue={100} onChange={(value) => setIntakeWeight(value)} />
        </Col>
        <Col span={5} offset={1}>
          <Button type="primary" onClick={() => addFoodToMenu(intakeWeight)}>Add to ration</Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddFoodToMenuComponent;
