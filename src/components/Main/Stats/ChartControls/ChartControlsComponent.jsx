import React from 'react';
import { Checkbox } from 'antd';
import statsChartLabels from './../../../../constants/statsChartLabels';
import style from './../StatsComponent.module.css';

function ChartControlsComponent({
  selectedFields, 
  onChange,
  goalWeight
}) {
  const checkboxOptions = statsChartLabels.map((obj) => {
    return {
      ...obj,
      disabled: obj.isGoal && goalWeight === false
    };
  });

  return (
    <div>
      <Checkbox.Group 
        options={checkboxOptions}
        defaultValue={selectedFields}
        onChange={onChange}
        className={style.statsControlsComponent}
        />
    </div>
  )
}

export default ChartControlsComponent;