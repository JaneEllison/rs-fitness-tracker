import React, {useState, useEffect} from 'react';
import style from './AddFoodToMenu.module.css';
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
    ADD_FOOD_TO_MENU_TIME_LABEL
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
      <Row
        align="center"
        justify="center"
        gutter={[0, 0]}
        xl={{gutter:[0,0]}}
      >
        <Col
          span={22}
          md={{span: 10}}
        >
          <Row
            align="center"
            justify="center"
          >
            <Col span={12}>
              <span className={style.dataTitle}>{ADD_FOOD_TO_MENU_INTAKE_LABEL}</span>
            </Col>
            <Col span={12}>
              <InputNumber
                className={style.stretchingElement}
                defaultValue={100}
                onChange={changeIntakeWeight}
              />
            </Col>
          </Row>
        </Col>
        <Col
          span={22}
          md={{span:12}}
        >
          <Row
            align="center"
            gutter={[10, 40]}
            xl={{gutter:[10,0]}}
          >
            <Col
              span={12}
              md={{span: 6}}
            >
              <span className={style.dataTitle}>{ADD_FOOD_TO_MENU_TIME_LABEL}</span>
            </Col>
            <Col
              span={12}
              md={{span: 8}}
            >
              <TimePicker
                className={style.stretchingElement}
                format="HH:mm"
                onChange={changeIntakeTime}
              />
            </Col>
            <Col
              span={22}
              md={{span: 8}}
            >
              <Button
                className={style.stretchingElement}
                type="primary"
                onClick={() => addToMenuCallback(dispatch, foodData, intakeWeight, intakeTime)}
                disabled={buttonDisabled}
              >
                Add to ration
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
  );
};

export default AddFoodToMenuComponent;
