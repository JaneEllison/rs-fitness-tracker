import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { isEmpty, useFirebase } from 'react-redux-firebase';
import useCheckButtonDisabled from '../../../../../customHooks/useCheckButtonDisabled';
import foodComponentsConfig from '../../../../../config/foodComponentsConfig';
import AddToMenuInputNumberComponent from './AddToMenuInputNumber/AddToMenuInputNumberComponent';
import AddToMenuInputTimeComponent from './AddToMenuInputTime/AddToMenuInputTimeComponent';
import addToMenu from './AddToMenuInputTime/addToMenu';
import profileSelector from '../../../../../store/Selectors/profileSelector';
import authSelector from '../../../../../store/Selectors/authSelector';

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
  const auth = useSelector(authSelector);
  return (
    <Row
      align={CENTER}
      justify={CENTER}
      gutter={[0, {
        xs: 5,
        sm: 5,
        md: 0,
      }]}
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
          buttonDisabled={isEmpty(auth) ? true : buttonDisabled}
          changeIntakeTime={changeIntakeTime}
          addToMenuCallback={() => addToMenu(firebase, foodData, intakeWeight, intakeTime, profile)}
        />
      </Col>
    </Row>
  );
};

AddFoodToMenuComponent.propTypes = {
  foodData: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
  intakeWeight: PropTypes.PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  changeIntakeWeight: PropTypes.func.isRequired,
  intakeTime: PropTypes.number.isRequired,
  changeIntakeTime: PropTypes.func.isRequired,
};

export default AddFoodToMenuComponent;
