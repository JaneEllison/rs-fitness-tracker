/* eslint-disable react/prop-types */
import React from 'react';
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

export default FoodStatCardComponent;
