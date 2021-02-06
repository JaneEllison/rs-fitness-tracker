import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Avatar,
  Descriptions,
} from 'antd';
import foodComponentConstants from '../../../../../constants/foodComponentConstants';
import getFoodParamTextValue from '../../../../../utils/getFoodParamTextValue';

const FoodStatCardComponent = ({
  foodPhoto, title, foodData, foodName,
}) => {
  const { foodStatsConstants } = foodComponentConstants;
  const { Meta } = Card;
  const food = Object.keys(foodData);
  return (
    <Card style={{ width: 300 }}>
      <Meta
        avatar={
          <Avatar src={foodPhoto} />
        }
        title={`${foodName} ${title}`}
      />
      <Descriptions column={1}>
        {
          food.map((item, index) => {
            const keyProp = `card${index}`;
            return (
              <Descriptions.Item
                label={getFoodParamTextValue(item, foodStatsConstants)}
                key={keyProp}
              >
                {foodData[item]}
              </Descriptions.Item>
            );
          })
        }
      </Descriptions>
    </Card>
  );
};

FoodStatCardComponent.propTypes = {
  foodPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  foodName: PropTypes.string.isRequired,
  foodData: PropTypes.object.isRequired,
};

export default FoodStatCardComponent;
