import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  userSummarySelector,
  userTimelineSelector
} from './../../../store/Selectors/userSelector';
import { Row, Col } from 'antd';

import UserSummaryComponent from './UserSummary/UserSummaryComponent';
import ChartControlsComponent from './ChartControls/ChartControlsComponent';
import ChartComponent from './Chart/ChartComponent';


function StatsComponent() {
  const [ selectedFields, setSelectedFields ] = useState(['weight', 'calories']);

  const summary = useSelector(userSummarySelector);
  const {
    goalWeight,
    dataset
  } = useSelector(userTimelineSelector);
  
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