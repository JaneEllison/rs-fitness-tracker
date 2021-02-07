import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import antdPropConstants from '../../constants/antdPropConstants';

const {
  EMPTY_PROP: {
    IMAGE_HEIGHT,
  },
} = antdPropConstants;

const EmptyComponent = ({
  message,
  image,
}) => (
  <Empty
    image={image}
    imageStyle={{ height: IMAGE_HEIGHT }}
    description={(
      <span>
        {message}
      </span>
      )}
  />
);

EmptyComponent.propTypes = {
  message: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default EmptyComponent;
