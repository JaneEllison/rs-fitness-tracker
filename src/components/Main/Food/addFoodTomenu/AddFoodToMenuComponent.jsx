import React, {useState, useEffect} from 'react';
import { Button, InputNumber, Row, Col, TimePicker } from 'antd';
import foodComponentConstants from '../../../../constants/foodComponentConstants';
import addToMenuCallback from './addToMenuCallback';
import { useDispatch } from 'react-redux';
import checkArrayForNullUndefNaN from '../../../../utils/checkArrayForNullUndefNaN';

const AddFoodToMenuComponent = ({
  foodData,
  intakeWeight,
  changeIntakeWeight,
  intakeTime,
  changeIntakeTime
}) => {
  const [buttonDisabled, toggleButtonDisabled] = useState(true);
  const {
    ADD_FOOD_TO_MENU_INTAKE_LABEL,
  } = foodComponentConstants;
  const dispatch = useDispatch();

  const {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
  } = foodData;
  useEffect(() => {
    if (checkArrayForNullUndefNaN([
      food_name,
      nf_calories,
      nf_total_fat,
      nf_total_carbohydrate,
      nf_protein,
      intakeWeight,
      intakeTime
    ])) {
      toggleButtonDisabled(false);
    } else {
      toggleButtonDisabled(true);
    }
  });

  return (
    <div>
      <Row>
        <Col span={6}>
          <span>{ADD_FOOD_TO_MENU_INTAKE_LABEL}</span>
        </Col>
        <Col span={4} offset={1}>
          <InputNumber
            defaultValue={100}
            onChange={changeIntakeWeight}
          />
        </Col>
        <Col span={5} offset={1}>
          <TimePicker
            format="HH:mm"
            onChange={changeIntakeTime}
          />
        </Col>
        <Col span={5} offset={1}>
          <Button
            type="primary"
            onClick={() => addToMenuCallback(dispatch, foodData, intakeWeight, intakeTime)}
            disabled={buttonDisabled}
          >
            Add to ration
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddFoodToMenuComponent;
