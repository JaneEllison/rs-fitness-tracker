import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

const EmptyComponent = ({
  message,
  image,
}) => (
  <Empty
    image={image}
    imageStyle={{ height: 80 }}
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
