import React, { useState } from 'react';
import { Row, Col } from 'antd';
import UserSummaryComponent from './UserSummary/UserSummaryComponent';
import ChartControlsComponent from './ChartControls/ChartControlsComponent';
import ChartComponent from './Chart/ChartComponent';


function StatsComponent({
  summary,
  timelineData: {
    goalWeight,
    dataset,
  }
}) {
  const [ selectedFields, setSelectedFields ] = useState(['weight', 'calories']);
  
  return (
    <Row>
      <Col span={6}>
        <UserSummaryComponent 
          summary={summary} 
          goalWeight={goalWeight}
          />
        <ChartControlsComponent
          selectedFields={selectedFields}
          onChange={setSelectedFields} 
          goalWeight={goalWeight}
          />
      </Col>
      <Col span={18}>
        <ChartComponent
          selectedFields={selectedFields}
          dataset={dataset}
          />
      </Col>
    </Row>
  )
}

export default StatsComponent;