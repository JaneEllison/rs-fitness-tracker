import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useCheckButtonDisabled from '../../../../../customHooks/useCheckButtonDisabled';
import foodComponentsConfig from '../../../../../config/foodComponentsConfig';
import AddToMenuInputNumberComponent from './AddToMenuInputNumber/AddToMenuInputNumberComponent';
import AddToMenuInputTimeComponent from './AddToMenuInputTime/AddToMenuInputTimeComponent';
import addToMenu from './AddToMenuInputTime/addToMenu';
import { useFirebase } from 'react-redux-firebase';
import profileSelector from '../../../../../store/Selectors/profileSelector';

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
  const profile = useSelector(profileSelector);
  const dispatch = useDispatch();
  const firebase = useFirebase();
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
            addToMenuCallback={() => addToMenu(firebase, foodData, intakeWeight, intakeTime, profile)}
          />
        </Col>
      </Row>
  );
};

export default AddFoodToMenuComponent;
