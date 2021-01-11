import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import chartCheckedSelector from './../../../../store/Selectors/chartCheckedSelector';
import { Checkbox } from 'antd';
import { setParams } from '../../../../store/chartReducer/chartReducer';

const checkboxFields = [
  { label: 'Your Weight', value: 'weightHistory' },
  { label: 'Calories Consumed', value: 'caloriesHistory' },
  { label: 'Workout Time', value: 'workoutHistory' }
  // { label: 'Goal Weight', value: 'goalWeight' },
  // { label: 'Goal Calories', value: 'goalCalories' },
];

export default function() {
  const dispatch = useDispatch();
  const flags = useSelector(chartCheckedSelector);

  return (
    <div style={{ display: 'block' }}>
      <Checkbox.Group 
        options={checkboxFields}
        onChange={(newFlags) => {
          dispatch( setParams(newFlags) );
        }}
        defaultValue={flags} 
        />
    </div>
  )
}