import React from 'react';
import style from './../StatsComponent.module.css';
import { Bar } from 'react-chartjs-2';

const getClone = (obj) => JSON.parse(JSON.stringify(obj));

function ChartComponent({
  selectedFields,
  dataset,
}) {
  const { data, options } = dataset[selectedFields];

  return (
    <article className={style.statsCanvasContainer}>
      <Bar 
        data={getClone(data)} 
        options={options} 
        redraw={true} 
        />
    </article>
  )
}

export default ChartComponent