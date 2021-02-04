import React from 'react';
import { Card } from 'antd';
import { useSelector } from 'react-redux';
import authSelector from '../../../../store/Selectors/authSelector';

const FoodToReachGoalComponent = () => {
  const auth = useSelector(authSelector);
  console.log(auth);
  return (
    <Card>

    </Card>
  );
};

export default FoodToReachGoalComponent;
