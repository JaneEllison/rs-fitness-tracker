import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';

const FoodProgressBarComponent = ({ percent, text }) => (
  <>
    <Progress type="circle" percent={percent} />
    <p>{text}</p>
  </>
);

FoodProgressBarComponent.propTypes = {
  percent: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default FoodProgressBarComponent;
