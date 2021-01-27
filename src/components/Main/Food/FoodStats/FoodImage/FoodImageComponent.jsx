import React from 'react';
import { Image } from 'antd';

const FoodImageComponent = ({imagePath}) => {
  return (
    <Image src={imagePath} />
  )
};

export default FoodImageComponent;
