import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import addToMenu from './AddToMenuInputTime/addToMenu';
import { useDispatch } from 'react-redux';
import useCheckButtonDisabled from '../../../../../customHooks/useCheckButtonDisabled';
import foodComponentsConfig from '../../../../../config/foodComponentsConfig';
import AddToMenuInputNumberComponent from './AddToMenuInputNumber/AddToMenuInputNumberComponent';
import AddToMenuInputTimeComponent from './AddToMenuInputTime/AddToMenuInputTimeComponent';
import checkArrayForNullUndefNaN from '../../../../../utils/checkArrayForNullUndefNaN';

const AddFoodToMenuComponent = ({
  foodData,
  intakeWeight,
  changeIntakeWeight,
  intakeTime,
  changeIntakeTime
}) => {
  const [buttonDisabled, toggleButtonDisabled] = useState(true);
  const {
    rowAlignments: {
      CENTER,
    },
  } = foodComponentsConfig;
  const dispatch = useDispatch();

  useCheckButtonDisabled({foodData, intakeWeight, intakeTime, toggleButtonDisabled});

  return (
      <Row
        align={CENTER}
        justify={CENTER}
        gutter={[0, 0]}
        xl={{gutter:[0,0]}}
      >
        <Col
          span={22}
          md={{span: 10}}
        >
          <AddToMenuInputNumberComponent changeIntakeWeight={changeIntakeWeight}/>
        </Col>
        <Col
          span={22}
          md={{span:12}}
        >
          <AddToMenuInputTimeComponent
            buttonDisabled={buttonDisabled}
            changeIntakeTime={changeIntakeTime}
            addToMenuCallback={() => addToMenu(dispatch, foodData, intakeWeight, intakeTime)}
          />
        </Col>
      </Row>
  );
};

export default AddFoodToMenuComponent;
