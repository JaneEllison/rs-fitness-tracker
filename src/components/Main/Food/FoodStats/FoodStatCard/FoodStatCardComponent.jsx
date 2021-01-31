import React from 'react';
import { Skeleton, Switch, Card, Avatar, Descriptions } from 'antd';
import foodComponentConstants from '../../../../../constants/foodComponentConstants';
import getFoodParamTextValue from '../../../../../utils/getFoodParamTextValue';

const FoodStatCardComponent = ({foodPhoto, title, foodData, foodName}) => {
  const { foodStatsConstants } = foodComponentConstants;
  const { Meta } = Card;
  const food = Object.keys(foodData);
  return (
    <Card style={{ width: 300}} >
      <Meta
        avatar={
          <Avatar src={foodPhoto} />
        }
        title={`${foodName} ${title}`}
      />
      <Descriptions column={1}>
        {
          food.map((item) => (
            <Descriptions.Item
              label={getFoodParamTextValue(item, foodStatsConstants)}
            >
              {foodData[item]}
            </Descriptions.Item>
            )
          )
        }
      </Descriptions>
    </Card>
  );
};

export default FoodStatCardComponent;
