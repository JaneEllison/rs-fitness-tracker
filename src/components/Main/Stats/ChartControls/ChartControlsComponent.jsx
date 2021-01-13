import React from 'react';
import { Checkbox } from 'antd';

function ChartControlsComponent({
  selectedFields, 
  onChange,
  isGoalMissing
}) {
  const controlsGroups = [
    { 
      label: 'Your weight', 
      value: 'weight' 
    },
    { 
      label: 'Goal weight', 
      value: 'goalWeight', 
      disabled: !isGoalMissing,
    },
    { 
      label: 'Consumed calories', 
      value: 'calories'
    },
    { 
      label: 'Required calories', 
      value: 'goalCalories',
      disabled: !isGoalMissing,
    },
    { 
      label: 'Workout time', 
      value: 'workouts'
    }
  ];

  return (
    <div>
      <Checkbox.Group 
        options={controlsGroups}
        defaultValue={selectedFields}
        onChange={onChange}
        />
    </div>
  )
}

export default ChartControlsComponent;