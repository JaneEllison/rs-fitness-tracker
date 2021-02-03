import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import useCheckButtonDisabled from '../../../../../customHooks/useCheckButtonDisabled';
import foodComponentsConfig from '../../../../../config/foodComponentsConfig';
import AddToMenuInputNumberComponent from './AddToMenuInputNumber/AddToMenuInputNumberComponent';
import AddToMenuInputTimeComponent from './AddToMenuInputTime/AddToMenuInputTimeComponent';
import addToMenu from './AddToMenuInputTime/addToMenu';
import profileSelector from '../../../../../store/Selectors/profileSelector';

const AddFoodToMenuComponent = ({
  foodData,
  intakeWeight,
  changeIntakeWeight,
  intakeTime,
  changeIntakeTime,
}) => {
  const [buttonDisabled, toggleButtonDisabled] = useState(true);
  const {
    rowAlignments: {
      CENTER,
    },
  } = foodComponentsConfig;
  const profile = useSelector(profileSelector);
  const firebase = useFirebase();
  useCheckButtonDisabled({
    foodData, intakeWeight, intakeTime, toggleButtonDisabled,
  });

  return (
    <Row
      align={CENTER}
      justify={CENTER}
      gutter={{
        sm: 10,
        lg: [0, 0],
      }}
    >
      <Col
        span={22}
        md={{ span: 10 }}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <AddToMenuInputNumberComponent changeIntakeWeight={changeIntakeWeight} />
      </Col>
      <Col
        span={22}
        md={{ span: 12 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
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

AddFoodToMenuComponent.propTypes = {
  foodData: PropTypes.objectOf(PropTypes.oneOfType(PropTypes.number, PropTypes.string)).isRequired,
  intakeWeight: PropTypes.number.isRequired,
  changeIntakeWeight: PropTypes.func.isRequired,
  intakeTime: PropTypes.number.isRequired,
  changeIntakeTime: PropTypes.func.isRequired,
};

export default AddFoodToMenuComponent;
