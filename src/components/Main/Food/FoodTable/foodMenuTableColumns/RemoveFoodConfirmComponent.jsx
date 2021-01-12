import React from 'react';
import { Popconfirm } from 'antd';
import { useDispatch } from 'react-redux';
import {
  calculateTotalNutrientsAC,
  removeFoodFromMenuAC,
} from '../../../../../store/FoodMenuReducer/foodMenuActionCreators';

const RemoveFoodConfirmComponent = ({tableRecord}) => {
  const dispatch = useDispatch();
  const { key } = tableRecord;
  return (
    <Popconfirm
      title="Sure to remove food from menu?"
      onConfirm={() => {
        dispatch(removeFoodFromMenuAC(key));
        dispatch(calculateTotalNutrientsAC())
      }}
    >
      <a>Remove</a>
    </Popconfirm>
  )
};

export default RemoveFoodConfirmComponent;
