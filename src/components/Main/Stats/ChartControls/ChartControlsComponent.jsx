import React from 'react';
import { Radio } from 'antd';
import { VALUES, LABELS } from '../../../../config/statsRadioConfig';
import style from './../StatsComponent.module.css';

function ChartControlsComponent({
  selectedField, 
  onChange,
  goal: {
    goalWeight,
    goalCalories
  },
}) {
  return (  
    <div className={style.styleChartControlsComponent}>
      <Radio.Group defaultValue={selectedField} onChange={(event) => onChange(event.target.value)}>
        <Radio value={VALUES.WEIGHT} className={style.statsChartControlsRadioComponent}>
          {LABELS.WEIGHT}
        </Radio>
        <Radio value={VALUES.WEIGHT_WITH_GOAL} disabled={!goalWeight} className={style.statsChartControlsRadioComponent}>
          {LABELS.WEIGHT_WITH_GOAL}
        </Radio>
        <Radio value={VALUES.WEIGHT_WITH_CALORIES} className={style.statsChartControlsRadioComponent}>
          {LABELS.WEIGHT_WITH_CALORIES}
        </Radio>
        <Radio value={VALUES.CALORIES} className={style.statsChartControlsRadioComponent}>
          {LABELS.CALORIES}
        </Radio>
        <Radio value={VALUES.CALORIES_WITH_GOAL} disabled={!goalCalories} className={style.statsChartControlsRadioComponent}>
          {LABELS.CALORIES_WITH_GOAL}
        </Radio>
        <Radio value={VALUES.WORKOUT_TIME} className={style.statsChartControlsRadioComponent}>
          {LABELS.WORKOUT_TIME}
        </Radio>
      </Radio.Group>
    </div>
  )
}

export default ChartControlsComponent;