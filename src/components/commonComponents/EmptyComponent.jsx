import React from 'react';
import { Empty } from 'antd';

const EmptyComponent = ({
  message, image
 }) => {
  return (
    <Empty
      image={image}
      imageStyle={{
        height: 80,
      }}
      description={
        <span>
          {message}
        </span>
      }
    />
  );
};

export default EmptyComponent;
