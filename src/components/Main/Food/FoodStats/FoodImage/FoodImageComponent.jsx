import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'antd';

const FoodImageComponent = ({ imagePath }) => (
  <Image src={imagePath} />
);

FoodImageComponent.defaultProps = {
  imagePath: null,
};

FoodImageComponent.propTypes = {
  imagePath: PropTypes.string,
};

export default FoodImageComponent;
