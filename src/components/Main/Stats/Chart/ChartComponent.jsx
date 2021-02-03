import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import style from '../StatsComponent.module.css';

const getClone = (obj) => JSON.parse(JSON.stringify(obj));

function ChartComponent({
  selectedFields,
  dataset,
}) {
  console.log(dataset);
  if (!dataset[selectedFields]) {
    return <div>...</div>;
  }
  const { data, options } = dataset[selectedFields];
  console.log(data, options);
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

ChartComponent.propTypes = {
  selectedFields: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  dataset: PropTypes.object.isRequired,
};

export default ChartComponent;
