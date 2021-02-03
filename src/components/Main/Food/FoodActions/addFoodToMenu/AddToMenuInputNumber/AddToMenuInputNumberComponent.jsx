import React from 'react';
import PropTypes from 'prop-types';
import { Col, InputNumber, Row } from 'antd';
import style from '../AddFoodToMenu.module.css';
import foodComponentsConfig from '../../../../../../config/foodComponentsConfig';
import foodComponentConstants from '../../../../../../constants/foodComponentConstants';

const AddToMenuInputNumberComponent = ({ changeIntakeWeight }) => {
  const {
    rowAlignments: { CENTER },
  } = foodComponentsConfig;
  const {
    ADD_FOOD_TO_MENU_INTAKE_LABEL,
  } = foodComponentConstants;

  return (
    <Row
      align={CENTER}
      justify={CENTER}
    >
      <Col span={12}>
        <span className={style.dataTitle}>{ADD_FOOD_TO_MENU_INTAKE_LABEL}</span>
      </Col>
      <Col span={12}>
        <InputNumber
          min={1}
          className={style.stretchingElement}
          defaultValue={100}
          onChange={changeIntakeWeight}
        />
      </Col>
    </Row>
  );
};

AddToMenuInputNumberComponent.propTypes = {
  changeIntakeWeight: PropTypes.func.isRequired,
};

export default AddToMenuInputNumberComponent;
