function createChartDatasets(source, selection) {
  
  // return dataEntries.reduce((acc, [key, value]) => {
    // const color = `#${Math.floor(Math.random() * 1000)}`;
    
    // if (key === 'dates') {
    //   acc.labels = value.map(item => new Date(item).toLocaleDateString());
    // } else if (selection.includes(key)) {
    //   if (key === 'workoutHistory') {
    //     acc.datasets.push({
    //       type: 'bar',
    //       label: key,
    //       borderColor: color,
    //       borderWidth: 2,
    //       data: value, 
    //     });
    //   } else {
    //     acc.datasets.push({
    //       type: 'line',
    //       label: key,
    //       data: value,
    //       borderColor: color,
    //       backgroundColor: color,
    //       fill: false,
    //     })
    //   }
    // }

    // return acc;
  // }, { datasets: [] });
}

export default createChartDatasets;