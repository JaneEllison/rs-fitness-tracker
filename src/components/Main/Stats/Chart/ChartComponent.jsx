/* eslint-disable react/prop-types */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import style from '../StatsComponent.module.css';

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
        redraw
      />
    </article>
  );
}

export default ChartComponent;
