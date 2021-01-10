import React, {useState, useEffect} from 'react';
import { Button, InputNumber , Row, Col } from 'antd';
import foodComponentConstants from '../../../../constants/foodComponentConstants';
import addToMenuCallback from './addToMenuCallback';
import { useDispatch } from 'react-redux';
import checkArrayForNullUndef from '../../../../utils/checkArrayForNullUndef';

const AddFoodToMenuComponent = ({foodData, intakeWeight, changeIntakeWeight}) => {
  const [buttonDisabled, toggleButtonDisabled] = useState(true);
  const {ADD_FOOD_TO_MENU_INTAKE_LABEL} = foodComponentConstants;
  const dispatch = useDispatch();

  const {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
  } = foodData;
  useEffect(() => {
    if (checkArrayForNullUndef([
      food_name,
      nf_calories,
      nf_total_fat,
      nf_total_carbohydrate,
      nf_protein,
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
          <InputNumber defaultValue={100} onChange={changeIntakeWeight} />
        </Col>
        <Col span={5} offset={1}>
          <Button
            type="primary"
            onClick={() => addToMenuCallback(dispatch, foodData, intakeWeight)}
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
