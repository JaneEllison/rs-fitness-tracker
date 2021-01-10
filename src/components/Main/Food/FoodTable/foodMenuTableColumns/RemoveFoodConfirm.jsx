import React from 'react';
import { Popconfirm } from 'antd';
import { removeFoodFromMenuAC } from '../../../../../store/FoodMenuReducer/foodMenureducer';
import { useDispatch } from 'react-redux';

const RemoveFoodConfirm = ({tableRecord}) => {
  const dispatch = useDispatch();
  const { key } = tableRecord;
  return (
    <Popconfirm
      title="Sure to remove food from menu?"
      onConfirm={() => dispatch(removeFoodFromMenuAC(key))}
    >
      <button>Remove</button>
    </Popconfirm>
  )
};

export default RemoveFoodConfirm;
