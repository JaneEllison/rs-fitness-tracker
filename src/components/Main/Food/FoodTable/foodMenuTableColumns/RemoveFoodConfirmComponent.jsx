import React from 'react';
import { Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  calculateTotalNutrientsAC,
} from '../../../../../store/FoodMenuReducer/foodMenuActionCreators';
import profileSelector from '../../../../../store/Selectors/profileSelector';
import removeFoodFromMenu from './removeFoodFromMenu';
import { useFirebase } from 'react-redux-firebase';

const RemoveFoodConfirmComponent = ({tableRecord}) => {
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);

  const { key } = tableRecord;
  const firebase = useFirebase();
  return (
    <Popconfirm
      title="Sure to remove food from menu?"
      onConfirm={() => {
        removeFoodFromMenu(key, profile, firebase);
        dispatch(calculateTotalNutrientsAC())
      }}
    >
      <a>Remove</a>
    </Popconfirm>
  )
};

export default RemoveFoodConfirmComponent;
