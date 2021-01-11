import React from 'react';
import { useSelector } from 'react-redux';
import chartCheckedSelector from './../../../../store/Selectors/chartCheckedSelector';
import { Bar } from 'react-chartjs-2';

function processData(source, selection) {
  const dataEntries = Object.entries(source);
  
  return dataEntries.reduce((acc, [key, value]) => {
    const color = `#${Math.floor(Math.random() * 1000)}`;
    
    if (key === 'dates') {
      acc.labels = value.map(item => new Date(item).toLocaleDateString());
    } else if (selection.includes(key)) {
      if (key === 'workoutHistory') {
        acc.datasets.push({
          type: 'bar',
          label: key,
          borderColor: color,
          borderWidth: 2,
          data: value, 
        });
      } else {
        acc.datasets.push({
          type: 'line',
          label: key,
          data: value,
          borderColor: color,
          backgroundColor: color,
          fill: false,
        })
      }
    }

    return acc;
  }, { datasets: [] });
}

export default function(props) {
  const currentSelection = useSelector(chartCheckedSelector);
  const { data: sourceData } = props;
  const data = processData(sourceData, currentSelection);

  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    legend: {
      onClick: (event) => event.stopPropagation(),
    }
  }

  return (
    <Bar data={data} options={options} />
  )
}