import {
  Button, Col, Row, TimePicker,
} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import style from '../AddFoodToMenu.module.css';
import foodComponentsConfig from '../../../../../../config/foodComponentsConfig';
import foodComponentConstants from '../../../../../../constants/foodComponentConstants';

const AddToMenuInputTimeComponent = ({ changeIntakeTime, buttonDisabled, addToMenuCallback }) => {
  const {
    rowAlignments: {
      CENTER,
    },
    foodActionsComponent: {
      TIME_PICKER_FORMAT,
      ADD_BUTTON_TYPE,
      ADD_BUTTON_TEXT,
    },
  } = foodComponentsConfig;
  const {
    ADD_FOOD_TO_MENU_TIME_LABEL,
  } = foodComponentConstants;

  return (
    <Row
      align={CENTER}
      gutter={[0, {
        xs: 5,
        sm: 5,
        md: 0,
      }]}
      style={{ width: '100%' }}
    >
      <Col
        span={12}
        md={{ span: 6 }}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <span className={style.dataTitle}>{ADD_FOOD_TO_MENU_TIME_LABEL}</span>
      </Col>
      <Col
        span={12}
        md={{ span: 8 }}
      >
        <TimePicker
          className={style.stretchingElement}
          format={TIME_PICKER_FORMAT}
          onChange={changeIntakeTime}
        />
      </Col>
      <Col
        span={22}
        lg={{ span: 8 }}
        md={{ span: 8 }}
      >
        <Button
          className={style.stretchingElement}
          type={ADD_BUTTON_TYPE}
          onClick={addToMenuCallback}
          disabled={buttonDisabled}
        >
          {ADD_BUTTON_TEXT}
        </Button>
      </Col>
    </Row>
  );
};

AddToMenuInputTimeComponent.propTypes = {
  changeIntakeTime: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  addToMenuCallback: PropTypes.func.isRequired,
};

export default AddToMenuInputTimeComponent;
