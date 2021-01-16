import React from 'react';
import { Radio } from 'antd';
import { OPTIONS, RADIO_LABELS } from './../../../../constants/statsChartConstants';
import style from './../StatsComponent.module.css';

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
        <Radio value={OPTIONS.WEIGHT}>
          {RADIO_LABELS.WEIGHT}
        </Radio>
        <Radio value={OPTIONS.WEIGHT_WITH_GOAL} disabled={!goalWeight}>
          {RADIO_LABELS.WEIGHT_WITH_GOAL}
        </Radio>
        <Radio value={OPTIONS.WEIGHT_WITH_CALORIES}>
          {RADIO_LABELS.WEIGHT_WITH_CALORIES}
        </Radio>
        <Radio value={OPTIONS.CALORIES}>
          {RADIO_LABELS.CALORIES}
        </Radio>
        <Radio value={OPTIONS.CALORIES_WITH_GOAL} disabled={!goalCalories}>
          {RADIO_LABELS.CALORIES_WITH_GOAL}
        </Radio>
        <Radio value={OPTIONS.WORKOUT_TIME}>
          {RADIO_LABELS.WORKOUT_TIME}
        </Radio>
      </Radio.Group>
    </div>
  )
}

export default ChartControlsComponent;