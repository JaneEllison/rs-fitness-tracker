import React from 'react';
import { Popconfirm } from 'antd';
import { useDispatch } from 'react-redux';
import {
  calculateTotalNutrientsAC,
  removeFoodFromMenuAC,
} from '../../../../../store/FoodMenuReducer/foodMenuActionCreators';

const RemoveFoodConfirm = ({tableRecord}) => {
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
      <button>Remove</button>
    </Popconfirm>
  )
};

export default RemoveFoodConfirm;
