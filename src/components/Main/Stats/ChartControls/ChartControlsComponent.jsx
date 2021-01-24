import React from 'react';
import { Radio } from 'antd';
import { VALUES, LABELS } from '../../../../config/statsRadioConfig';

function ChartControlsComponent({
  selectedField, 
  onChange,
  goal: {
    goalWeight,
    goalCalories,
  }
}) {
  return (  
    <div>
      <Radio.Group defaultValue={selectedField} onChange={(event) => onChange(event.target.value)}>
        <Radio value={VALUES.WEIGHT}>
          {LABELS.WEIGHT}
        </Radio>
        <Radio value={VALUES.WEIGHT_WITH_GOAL} disabled={!goalWeight}>
          {LABELS.WEIGHT_WITH_GOAL}
        </Radio>
        <Radio value={VALUES.WEIGHT_WITH_CALORIES}>
          {LABELS.WEIGHT_WITH_CALORIES}
        </Radio>
        <Radio value={VALUES.CALORIES}>
          {LABELS.CALORIES}
        </Radio>
        <Radio value={VALUES.CALORIES_WITH_GOAL} disabled={!goalCalories}>
          {LABELS.CALORIES_WITH_GOAL}
        </Radio>
        <Radio value={VALUES.WORKOUT_TIME}>
          {LABELS.WORKOUT_TIME}
        </Radio>
      </Radio.Group>
    </div>
  )
}

export default ChartControlsComponent;