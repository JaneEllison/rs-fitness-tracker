import React from 'react';
import { Progress } from 'antd';

const FoodProgressBarComponent = ({percent, text}) => {
  return (
    <>
      <Progress type="circle" percent={percent} />
      <p>{text}</p>
    </>
  );
};

export default FoodProgressBarComponent;
